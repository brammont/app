import React from 'react'
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
          <div className='pricing__section'>
            <div className='pricing__wrapper'>
              <h1 className='pricing__heading'>Precios</h1>
              <div className='pricing__container'>
                <Link to='/sign-up' className='pricing__container-card'>
                  <div className='pricing__container-cardInfo'>
                    <div className='icon'>
                      <FaFire />
                    </div>
                    <h3>Empezar</h3>
                    <h4>$8.99</h4>
                    <p>por mes</p>
                    <ul className='pricing__container-features'>
                      <li>100 Transacciones</li>
                      <li>2% Dinero devuelto</li>
                      <li>$10,000 Limite</li>
                    </ul>
                    <Button buttonSize='btn--wide' buttonColor='primary'>
                      Seleccione el Plan
                    </Button>
                  </div>
                </Link>
                <Link to='/sign-up' className='pricing__container-card'>
                  <div className='pricing__container-cardInfo'>
                    <div className='icon'>
                      <BsXDiamondFill />
                    </div>
                    <h3>Gold</h3>
                    <h4>$29.99</h4>
                    <p>por mes</p>
                    <ul className='pricing__container-features'>
                      <li>1000 Transacciones</li>
                      <li>3.5% Dinero devuelto</li>
                      <li>$100,000 Limite</li>
                    </ul>
                    <Button buttonSize='btn--wide' buttonColor='blue'>
                        Seleccione el Plan
                    </Button>
                  </div>
                </Link>
                <Link to='/sign-up' className='pricing__container-card'>
                  <div className='pricing__container-cardInfo'>
                    <div className='icon'>
                      <GiCrystalize />
                    </div>
                    <h3>Diamond</h3>
                    <h4>$99.99</h4>
                    <p>po mes</p>
                    <ul className='pricing__container-features'>
                      <li>Transactions Ilimitadas</li>
                      <li>5% Dinero devuelto</li>
                      <li>Gasto ilimitado</li>
                    </ul>
                    <Button buttonSize='btn--wide' buttonColor='primary'>
                        Seleccione el Plan
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      );
    }
    export default Pricing;