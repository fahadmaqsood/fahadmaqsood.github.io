import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div className="container">
            <h1 id="logo" className="text-center"><a href="/">Asad<b>Memon</b></a></h1>
            <ul className="menu">
              <li><a href="/projects">All Projects</a></li>
              <li><a href="/talks">Talks</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a target="_blank" href="https://asad.substack.com/">Newsletter</a></li>
              <li><a target="_blank" href="https://github.com/fahadmaqsood">Github</a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/fahad-maqsood-qazi">LinkedIn</a></li>
              <li><a target="_blank" href="https://www.instagram.com/ifahadmaqsood">Instagram</a></li>
            </ul>

            <Main />
            <NextScript />

            <div className="footer">
              <p>AsadMemon.com [<a href="https://github.com/asadm/asadm.github.io" target="_blank">source code</a>].</p>
            </div>
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
