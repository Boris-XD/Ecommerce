import React from 'react'
import category from './../assets/categoria1.jpg'
import producto1 from './../assets/producto1.jpg'
import producto2 from './../assets/producto2.jpg'
import producto3 from './../assets/producto3.jpg'
import producto4 from './../assets/producto4.jpg'
import producto5 from './../assets/producto5.jpg'
import producto6 from './../assets/producto6.jpg'

const Inicio = () => {
  return (
    <>
    <div className='hero'></div>
    <section>
      <h2>Categoria de Productos</h2>
      <img src={category} alt="category one" />
    </section>

    <section>
        <div>
            <h2>Sobre Nosotros</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit quaerat eligendi quisquam ipsum culpa, qui similique quam nisi deserunt distinctio quas doloremque consequuntur. Nihil sed rerum quidem quibusdam provident!</p>
        </div>
    </section>

    <main>
        <h2>Nuestros Productos</h2>
        <div>
            <div>
                <img src={producto1} alt="Producto 1" />
                <div>
                    <h3>Producto 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam non natus placeat explicabo cupiditate maiores aspernatur, consequatur minima? Ea possimus quaerat obcaecati fuga corrupti, repellendus sapiente perspiciatis dolorem dignissimos.</p>
                    <p>$ 1000</p>
                    <a href="#">Agregar al Carrito</a>
                </div>
            </div>
            <div>
                <img src={producto2} alt="Producto 2" />
                <div>
                    <h3>Producto 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam non natus placeat explicabo cupiditate maiores aspernatur, consequatur minima? Ea possimus quaerat obcaecati fuga corrupti, repellendus sapiente perspiciatis dolorem dignissimos.</p>
                    <p>$ 1000</p>
                    <a href="#">Agregar al Carrito</a>
                </div>
            </div>
            <div>
                <img src={producto3} alt="Producto 3" />
                <div>
                    <h3>Producto 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam non natus placeat explicabo cupiditate maiores aspernatur, consequatur minima? Ea possimus quaerat obcaecati fuga corrupti, repellendus sapiente perspiciatis dolorem dignissimos.</p>
                    <p>$ 1000</p>
                    <a href="#">Agregar al Carrito</a>
                </div>
            </div>
            <div>
                <img src={producto4} alt="Producto 4" />
                <div>
                    <h3>Producto 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam non natus placeat explicabo cupiditate maiores aspernatur, consequatur minima? Ea possimus quaerat obcaecati fuga corrupti, repellendus sapiente perspiciatis dolorem dignissimos.</p>
                    <p>$ 1000</p>
                    <a href="#">Agregar al Carrito</a>
                </div>
            </div>
            <div>
                <img src={producto5} alt="Producto 5" />
                <div>
                    <h3>Producto 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam non natus placeat explicabo cupiditate maiores aspernatur, consequatur minima? Ea possimus quaerat obcaecati fuga corrupti, repellendus sapiente perspiciatis dolorem dignissimos.</p>
                    <p>$ 1000</p>
                    <a href="#">Agregar al Carrito</a>
                </div>
            </div>
            <div>
                <img src={producto6} alt="Producto 6" />
                <div>
                    <h3>Producto 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos totam non natus placeat explicabo cupiditate maiores aspernatur, consequatur minima? Ea possimus quaerat obcaecati fuga corrupti, repellendus sapiente perspiciatis dolorem dignissimos.</p>
                    <p>$ 1000</p>
                    <a href="#">Agregar al Carrito</a>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Inicio