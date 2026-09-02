import { ArrowRight, Heart, Menu, Search, ShoppingBag, Sparkles } from 'lucide-react'

const products = [
  {
    name: 'Rosé Amour',
    type: 'Rosenstrauß',
    price: '39,90 €',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Pure Elegance',
    type: 'Premium Bouquet',
    price: '54,90 €',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Wild Garden',
    type: 'Wildblumen',
    price: '34,90 €',
    image: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=900&q=85',
  },
]

const categories = [
  { label: 'Rosen', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85' },
  { label: 'Sträuße', image: 'https://images.unsplash.com/photo-1523691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85' },
  { label: 'Hochzeit', image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=700&q=85' },
  { label: 'Geschenke', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=85' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" aria-label="MeinBlumen Startseite">
          <span className="brand-mark">M</span>
          <span>Mein<span>Blumen</span></span>
        </a>

        <nav className="nav-links" aria-label="Hauptnavigation">
          <a href="#blumen">Blumen</a>
          <a href="#kollektion">Sträuße</a>
          <a href="#anlaesse">Anlässe</a>
          <a href="#story">Über uns</a>
        </nav>

        <div className="nav-actions">
          <button aria-label="Suche"><Search size={20} /></button>
          <button aria-label="Favoriten"><Heart size={20} /></button>
          <button className="bag-button" aria-label="Warenkorb"><ShoppingBag size={20} /><span>0</span></button>
          <button className="mobile-menu" aria-label="Menü"><Menu size={22} /></button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=2200&q=90" alt="" />
          </div>
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow"><Sparkles size={15} /> Frisch. Handgebunden. Mit Gefühl.</p>
            <h1>Blumen,<br /><em>die etwas sagen.</em></h1>
            <p className="hero-copy">Besondere Sträuße für die Momente, die im Herzen bleiben.</p>
            <a className="primary-button" href="#kollektion">Kollektion entdecken <ArrowRight size={18} /></a>
          </div>
          <div className="hero-note">Seit 2018 · Mit Liebe in Köln</div>
          <div className="scroll-cue"><span /> Scroll</div>
        </section>

        <section className="intro section" id="blumen">
          <div>
            <p className="eyebrow dark">Unsere Welt</p>
            <h2>Für jeden Moment<br /><em>die richtige Blume.</em></h2>
          </div>
          <p className="section-copy">Von zarten Rosen bis zu wilden Saisonblumen: Wir gestalten florale Arrangements, die nicht nach Katalog aussehen, sondern nach dir.</p>
        </section>

        <section className="category-grid section" id="anlaesse">
          {categories.map((category) => (
            <a className="category-card" href="#kollektion" key={category.label}>
              <img src={category.image} alt={category.label} />
              <div className="category-shade" />
              <span>{category.label}</span>
              <ArrowRight size={19} />
            </a>
          ))}
        </section>

        <section className="collection section" id="kollektion">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark">Unsere Favoriten</p>
              <h2>Diese Woche <em>blüht auf.</em></h2>
            </div>
            <a className="text-link" href="#kollektion">Alle Blumen <ArrowRight size={17} /></a>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {index === 0 && <span className="badge">Bestseller</span>}
                  <button className="favorite" aria-label={`${product.name} merken`}><Heart size={19} /></button>
                  <button className="quick-add" aria-label={`${product.name} in den Warenkorb`}>+</button>
                </div>
                <div className="product-info">
                  <div><span>{product.type}</span><h3>{product.name}</h3></div>
                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story section" id="story">
          <div className="story-image"><img src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=90" alt="Floristin bindet einen Blumenstrauß" /></div>
          <div className="story-content">
            <p className="eyebrow dark">Mehr als nur Blumen</p>
            <h2>Mit Händen gemacht.<br /><em>Für Herzen gedacht.</em></h2>
            <p>Wir glauben, dass ein Blumenstrauß mehr sein darf als Dekoration. Deshalb wählen wir jede Blume bewusst aus und binden jedes Arrangement von Hand.</p>
            <a className="text-link" href="#top">Unsere Geschichte <ArrowRight size={17} /></a>
          </div>
        </section>

        <section className="newsletter section">
          <p className="eyebrow">Blumenpost</p>
          <h2>Ein bisschen Schönheit<br /><em>für deinen Posteingang.</em></h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Deine E-Mail-Adresse" aria-label="E-Mail-Adresse" />
            <button type="submit">Anmelden <ArrowRight size={17} /></button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="brand footer-brand"><span className="brand-mark">M</span><span>Mein<span>Blumen</span></span></div>
        <p>Blumen, die etwas sagen.</p>
        <div><a href="#top">Instagram</a><a href="#top">Kontakt</a><a href="#top">Impressum</a></div>
      </footer>
    </div>
  )
}

export default App
