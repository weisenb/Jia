import { useEffect, useState } from 'react'
import { ultramans, type Ultraman } from '../data/ultramans'
import '../styles/ManPage.css'

const imageModules = import.meta.glob('../images/ultramans/*.{jpg,png}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

type GalleryItem = {
  ultraman: Ultraman
  image: string
  ratio: number
}

type GalleryColumns = [GalleryItem[], GalleryItem[]]

function getImageForId(id: string) {
  return Object.entries(imageModules).find(([path]) => path.includes(`/ultramans/${id}.`))?.[1]
}

function distributeItems(items: GalleryItem[]): GalleryColumns {
  const columns: GalleryColumns = [[], []]
  const heights = [0, 0]

  for (const item of items) {
    const columnIndex = heights[0] <= heights[1] ? 0 : 1
    columns[columnIndex].push(item)
    heights[columnIndex] += item.ratio
  }

  return columns
}

export function ManPage() {
  const [columns, setColumns] = useState<GalleryColumns>([[], []])
  const [selectedUltraman, setSelectedUltraman] = useState<Ultraman | null>(null)

  useEffect(() => {
    let isActive = true
    const gallery = ultramans
      .map((ultraman) => ({ ultraman, image: getImageForId(ultraman.id) }))
      .filter((item): item is { ultraman: Ultraman; image: string } => Boolean(item.image))

    Promise.all(gallery.map(({ ultraman, image }) => new Promise<GalleryItem>((resolve) => {
      const preview = new Image()
      preview.src = image
      preview.onload = () => resolve({ ultraman, image, ratio: preview.naturalHeight / preview.naturalWidth })
      preview.onerror = () => resolve({ ultraman, image, ratio: 1 })
    }))).then((items) => {
      if (isActive) {
        setColumns(distributeItems(items))
      }
    })

    return () => {
      isActive = false
    }
  }, [])

  return (
    <section className="man-page">
      <header className="man-page__header">
        <p className="man-page__eyebrow">ULTRAMAN ARCHIVE</p>
        <h1 className="man-page__title" id="page-title">奥特曼</h1>
        <p className="man-page__description">光之战士档案</p>
      </header>

      <div className="man-page__gallery">
        {columns.map((column, index) => (
          <div className="man-page__column" key={index}>
            {column.map(({ ultraman, image }) => (
              <button
                className="man-page__card"
                key={ultraman.id}
                type="button"
                onClick={() => setSelectedUltraman(ultraman)}
              >
                <img className="man-page__image" src={image} alt={ultraman.name} />
                <span className="man-page__card-name">{ultraman.name}</span>
              </button>
            ))}
          </div>
        ))}
      </div>

      {selectedUltraman && (
        <div className="man-page__dialog" onClick={() => setSelectedUltraman(null)}>
          <article className="man-page__detail" onClick={(event) => event.stopPropagation()}>
            <button className="man-page__close" type="button" onClick={() => setSelectedUltraman(null)}>关闭</button>
            <div className="man-page__detail-heading">
              <p>{selectedUltraman.category}{selectedUltraman.era ? ` / ${selectedUltraman.era}` : ''}</p>
              <h2>{selectedUltraman.name}</h2>
              <span>{selectedUltraman.englishName}</span>
            </div>
            <p className="man-page__meaning">{selectedUltraman.nameMeaning}</p>
            <dl className="man-page__facts">
              <div><dt>登场</dt><dd>{selectedUltraman.debut || '未标注'}</dd></div>
              <div><dt>来源</dt><dd>{selectedUltraman.origin}</dd></div>
              <div><dt>人间体</dt><dd>{selectedUltraman.humanHost}</dd></div>
              <div><dt>别名</dt><dd>{selectedUltraman.aliases.join('、')}</dd></div>
            </dl>
            <p className="man-page__detail-description">{selectedUltraman.description}</p>
            {selectedUltraman.abilities.length > 0 && (
              <section className="man-page__detail-section">
                <h3>能力</h3>
                <p>{selectedUltraman.abilities.join('、')}</p>
              </section>
            )}
            {selectedUltraman.equipment.length > 0 && (
              <section className="man-page__detail-section">
                <h3>装备</h3>
                <p>{selectedUltraman.equipment.join('、')}</p>
              </section>
            )}
            {selectedUltraman.relationships.length > 0 && (
              <section className="man-page__detail-section">
                <h3>关系</h3>
                <p>{selectedUltraman.relationships.join('、')}</p>
              </section>
            )}
          </article>
        </div>
      )}
    </section>
  )
}
