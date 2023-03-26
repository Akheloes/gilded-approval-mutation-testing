import { verify } from 'approvals'
import { Item, GildedRose } from './gilded-rose'


describe('Gilded Rose', () => {
  it('Should have a golden master output', () => {
    // @TODO: replace with a verifyCombinationAll-like method.
    const items: Item[] = [
      new Item('foo', 0, 0),
      new Item('foo', -9, 10),
      new Item('foo', 0, 51),
      new Item('foo', 4, 48),
      new Item('Aged Brie', 2, 0),
      new Item('Aged Brie', 2, 40),
      new Item('Aged Brie', 12, 0),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -15, 20),
      new Item('Sulfuras, Hand of Ragnaros', 15, 20),
      new Item('Sulfuras, Hand of Ragnaros', 5, 20),
      new Item('Sulfuras, Hand of Ragnaros', 5, 49),
      new Item('Sulfuras, Hand of Ragnaros', 10, 20),
      new Item('Sulfuras, Hand of Ragnaros', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', -15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)
    ]

    const gildedRose = new GildedRose(items)

    gildedRose.updateQuality()

    const arrayToString = (array: Array<Item>) => array.map((item: Item) => `['${item.name}'], ${item.sellIn}, ${item.quality}`).join('\n')

    verify(__dirname, 'approval-test', arrayToString(items))
  })
})
