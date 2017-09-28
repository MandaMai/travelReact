import React, { Component } from 'react';
import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap';
import './Hero.css';


export default class Hero extends Component {
    render() {
        return (
                <Carousel class="HeroContainer">
                  <Carousel.Item>
                    <img height={400} alt="900x700" src="https://i2.wp.com/woocontent.com/wp-content/uploads/2017/07/wOO-TRAVEL-1.jpg?resize=1000%2C400&ssl=1"/>
                    <Carousel.Caption>
                      <h3>Welcome to My Travel Site!</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img height={400} alt="900x500" src="http://www.coolplaces.co.uk/system/images/17719/essex-england-essex-large.jpg"/>
                    <Carousel.Caption>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img height={400} alt="900x500" src="http://www.appointmentgroup.com/wp-content/uploads/2015/04/London-skyline-from-the-shard-web.jpg"/>
                    <Carousel.Caption>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img height={400} alt="900x500" src="http://www.hotelroomsearch.net/im/city/castlebar-ireland-11.jpg"/>
                    <Carousel.Caption>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img height={400} alt="900x500" src="http://www.discoversouthwestscotland.co.uk/wp-content/uploads/2013/02/Dunskey-Castle-1000x400.jpg"/>
                    <Carousel.Caption>
                     </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img height={400} alt="900x500" src="https://tcproduction.blob.core.windows.net/media/%7B278b85a2-ad89-4c04-a33d-9e0bb566a60e%7D.2231903771_5f260e460a_o.jpg"/>
                    <Carousel.Caption>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img height={400} alt="900x500" src="http://www.tamariskrtw.com/wp-content/uploads/2012/10/Cinque-Terre-Vernzza-Pano.jpg"/>
                    <Carousel.Caption>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img height={400} alt="900x500" src="http://www.torfx.com/blog/wp-content/uploads/2017/08/Paris-skyline.jpg"/>
                    <Carousel.Caption>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img height={400} alt="900x500" src="https://intranet.kes.hants.sch.uk/resource.aspx?id=92349"/>
                    <Carousel.Caption>
                      </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              );
              
             
              
      
      }


}
