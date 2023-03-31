import { verify } from 'approvals'
import { Item, GildedRose } from './gilded-rose'


class GildedTestHelper {
  static itemNames = ['foo', 'Aged Brie', 'Sulfuras, Hand of Ragnaros', 'Backstage passes to a TAFKAL80ETC concert']
  static itemGenerator = (name: string, sellIn: number, quality: number) => new Item(name, sellIn, quality)
  static arrayToString = (array: Array<Item>) => array.map((item: Item) => `['${item.name}'], ${item.sellIn}, ${item.quality}`).join('\n')
  static caseGenerator = (
    lowerBoundSellIn: number,
    upperBoundSellIn: number,
    lowerBoundQuality: number,
    upperBoundQuality: number,
    step: number = 1
  ) => {
    const itemsArray: Item[] = []

    for (let s = lowerBoundSellIn; s < upperBoundSellIn; s += step) {
      for (let q = lowerBoundQuality; q < upperBoundQuality; q += step) {
        for (let n = 0; n < GildedTestHelper.itemNames.length; n++) {
          itemsArray.push(GildedTestHelper.itemGenerator(GildedTestHelper.itemNames[n], s, q))
        }
      }
    }

    return itemsArray
  }
}

describe('Gilded Rose', () => {
  it('Should be able to construct a Gilded rose shop without an item list.', () => {
    const gildedRose = new GildedRose()
    expect(gildedRose).toBeDefined()
  })

  it('Should verify an approval test output.', () => {
    const items: Item[] = GildedTestHelper.caseGenerator(-1, 16, 0, 51, 1)
    const gildedRose = new GildedRose(items)

    gildedRose.updateQuality()

    verify(__dirname, 'approval-test', GildedTestHelper.arrayToString(items))
  })
})
