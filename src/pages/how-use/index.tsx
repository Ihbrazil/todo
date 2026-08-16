import { Link } from 'react-router-dom'
import './styles.css'

export default function ComoUsar() {
  return (
    <div className="como-usar-container">
      {/* Lado esquerdo roxo */}
      <div className="como-usar-sidebar">
        <h1>Como usar</h1>
        <Link to="/">Voltar para Home</Link>
      </div>

      {/* Lado direito com instruções */}
      <div className="como-usar-content">
        <section>
          <h2>Como usar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisi id urna pulvinar, sit amet dignissim nulla efficitur. Fusce in tellus turpis. Vivamus ullamcorper, quam non dapibus posuere, est eros gravida lacus est vel sem. Phasellus ante urna, accumsan vel euismod quis, consequat at diam. Ut justo libera, eleifend et mattis non, aliquet et nunc. Donec tempor urna augue, volutpat vulputate nisi placerat eget. Etiam hendrerit orci vitae lacus gravida, in ornare nisi porta. Nunc malesuada nulla vel mi iaculis, quis accumsan nunc gravida.
          </p>
        </section>

        <section>
          <h3>Lorem ipsum</h3>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisi id urna pulvinar, sit amet dignissim nulla efficitur. Fusce in tellus turpis.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisi id urna pulvinar, sit amet dignissim nulla efficitur. Fusce in tellus turpis.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisi id urna pulvinar, sit amet dignissim nulla efficitur. Fusce in tellus turpis.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisi id urna pulvinar, sit amet dignissim nulla efficitur. Fusce in tellus turpis.</li>
          </ol>
        </section>
      </div>
    </div>
  )
}