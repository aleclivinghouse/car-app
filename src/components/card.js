import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import Carousel, { Modal, ModalGateway } from 'react-images';
import {deleteCard} from '../actions';
import {connect} from 'react-redux';


class CardItem extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        on: false,
        modalIsOpen: false
      };
    }

    toggleSpecs(){
      console.log('toggle specs firing');
      this.setState({on: !this.state.on})
    }


    toggleModal = () => {
      this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
    }

    deleteCard(){
      this.props.deleteCard(this.props.car);
    }

    render(){
      let car = this.props.car;
      console.log(this.props.car.media.photo_links, "photos");
      const forCarousel = this.props.car.media.photo_links.map(photo => ({src:photo}));
      function createData(miles, price, carfax, dealerLocation, vimNumber, dealerWebsite, engine, highwayMiles){
        return {miles, price, carfax, dealerLocation, vimNumber, dealerWebsite, engine, highwayMiles};
      }

      const rows = [
        createData('miles', car.miles),
        createData('price', car.price),
        createData('Carfax Clean Title', car.carfax_clean_title.toString()),
        createData("Dealer Location", car.dealer.street),
        createData("Vin number", car.vin),
        createData("Dealer Website", car.dealer.website),
        createData("Engine", car.build.engine),
        createData("Highway Miles", car.build.highway_miles),

      ]
      return(
        <div>
        {this.props.car ? (
          <div>
              <ModalGateway>
           {this.state.modalIsOpen ? (
             <Modal onClose={this.toggleModal.bind(this)}>
               <Carousel views={forCarousel} />
             </Modal>
           ) : null}
         </ModalGateway>
          <Card style={{width: "80%", marginBottom: 50}}>
          <CardActionArea>
              <CardMedia
                image={this.props.car.media.photo_links[0]}
                title="Specs"
                style={{paddingTop: '56.25%'}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.car.build.make} {this.props.car.build.model} {this.props.car.build.year}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <Table style={{height:400}} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Specs</TableCell>
                    </TableRow>
                  </TableHead>
                    {this.state.on &&(
                  <TableBody>
                    {rows.map(row =>
                      <TableRow>
                      <TableCell align="right">{row.miles}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.carfax}</TableCell>
                      <TableCell align="right">{row.dealerLocation}</TableCell>
                      <TableCell align="right">{row.vimNumber}</TableCell>
                      <TableCell align="right">{row.dealerWebsite}</TableCell>
                      <TableCell align="right">{row.engine}</TableCell>
                      <TableCell align="right">{row.highwayMiles}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                  )}
                </Table>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
          <Button size="small" color="primary"  onClick={this.toggleSpecs.bind(this)}>
            Toggle
          </Button>
            <Button size="small" color="primary"  onClick={this.toggleModal.bind(this)}>
              View More Pictures
            </Button>
            <Button size="small" color="secondary"  onClick={this.deleteCard.bind(this)}>
              View More Pictures
            </Button>
        </CardActions>
          </Card>
        </div>
        ): null}
      </div>
      )
    }
}
export default connect(null, {deleteCard})(CardItem);


// <CardMedia style={{height: 0, paddingTop: '56.25%'}}
//     image={props.car.media.photolinks[0]}
//     title={props.car.build.make+' '+props.car.build.model +" "+props.car.build.year}
//      />
//     <CardContent>
//         <Typography gutterBottom variant="headline" component="h2">
//             `miles: {props.car}`
//           </Typography>
//             <Typography component="p">
//                 {props.course.fields.description}
//             </Typography>
//               </CardContent>
//               <CardActions>
//               <Button size="small" color="primary" href={props.course.fields.url} target="_blank">
//                 View More Images
//               </Button>
//            </CardActions>
