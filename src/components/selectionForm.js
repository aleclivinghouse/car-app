import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import {connect} from 'react-redux';

class SelectionForm extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          ACURA: [{"model_name":"CL","model_make_id":"acura"},{"model_name":"MDX","model_make_id":"acura"},{"model_name":"NSX","model_make_id":"acura"},{"model_name":"RL","model_make_id":"acura"},{"model_name":"RSX","model_make_id":"acura"},{"model_name":"TL","model_make_id":"acura"},{"model_name":"TSX","model_make_id":"acura"}],
          AUDI: [{"model_name":"A3","model_make_id":"audi"},{"model_name":"A4","model_make_id":"audi"},{"model_name":"A6","model_make_id":"audi"},{"model_name":"A8","model_make_id":"audi"},{"model_name":"Allroad","model_make_id":"audi"},{"model_name":"RS4","model_make_id":"audi"},{"model_name":"RS6","model_make_id":"audi"},{"model_name":"S4","model_make_id":"audi"},{"model_name":"S6","model_make_id":"audi"},{"model_name":"S8","model_make_id":"audi"},{"model_name":"TT","model_make_id":"audi"}],
          BMW:[{"model_name":"316","model_make_id":"bmw"},{"model_name":"318","model_make_id":"bmw"},{"model_name":"320","model_make_id":"bmw"},{"model_name":"325","model_make_id":"bmw"},{"model_name":"330","model_make_id":"bmw"},{"model_name":"520","model_make_id":"bmw"},{"model_name":"525","model_make_id":"bmw"},{"model_name":"530","model_make_id":"bmw"},{"model_name":"535","model_make_id":"bmw"},{"model_name":"545","model_make_id":"bmw"},{"model_name":"630","model_make_id":"bmw"},{"model_name":"645","model_make_id":"bmw"},{"model_name":"730","model_make_id":"bmw"},{"model_name":"740","model_make_id":"bmw"},{"model_name":"745","model_make_id":"bmw"},{"model_name":"748","model_make_id":"bmw"},{"model_name":"750","model_make_id":"bmw"},{"model_name":"760","model_make_id":"bmw"},{"model_name":"M3","model_make_id":"bmw"},{"model_name":"M6","model_make_id":"bmw"},{"model_name":"X3","model_make_id":"bmw"},{"model_name":"X5","model_make_id":"bmw"},{"model_name":"Z4","model_make_id":"bmw"}],
          BUICK: [{"model_name":"Century","model_make_id":"buick"},{"model_name":"LaCrosse","model_make_id":"buick"},{"model_name":"LeSabre","model_make_id":"buick"},{"model_name":"Park Avenue","model_make_id":"buick"},{"model_name":"Rainier","model_make_id":"buick"},{"model_name":"Regal","model_make_id":"buick"},{"model_name":"Rendezvous","model_make_id":"buick"},{"model_name":"Terraza","model_make_id":"buick"}],
          CADILLAC: [{"model_name":"Catera","model_make_id":"cadillac"},{"model_name":"CTS","model_make_id":"cadillac"},{"model_name":"DeVille","model_make_id":"cadillac"},{"model_name":"DTS","model_make_id":"cadillac"},{"model_name":"Escalade","model_make_id":"cadillac"},{"model_name":"Seville","model_make_id":"cadillac"},{"model_name":"SRX","model_make_id":"cadillac"},{"model_name":"STS","model_make_id":"cadillac"},{"model_name":"XLR","model_make_id":"cadillac"}],
          CHEVROLET:[{"model_name":"Alero","model_make_id":"chevrolet"},{"model_name":"Astro","model_make_id":"chevrolet"},{"model_name":"Avalanche","model_make_id":"chevrolet"},{"model_name":"Aveo","model_make_id":"chevrolet"},{"model_name":"Blazer","model_make_id":"chevrolet"},{"model_name":"Cavalier","model_make_id":"chevrolet"},{"model_name":"Cobalt","model_make_id":"chevrolet"},{"model_name":"Colorado","model_make_id":"chevrolet"},{"model_name":"Corvette","model_make_id":"chevrolet"},{"model_name":"Equinox","model_make_id":"chevrolet"},{"model_name":"Express","model_make_id":"chevrolet"},{"model_name":"Impala","model_make_id":"chevrolet"},{"model_name":"Lumina","model_make_id":"chevrolet"},{"model_name":"Malibu","model_make_id":"chevrolet"},{"model_name":"Monte Carlo","model_make_id":"chevrolet"},{"model_name":"Prizm","model_make_id":"chevrolet"},{"model_name":"S-10","model_make_id":"chevrolet"},{"model_name":"Silverado","model_make_id":"chevrolet"},{"model_name":"Suburban","model_make_id":"chevrolet"},{"model_name":"Tahoe","model_make_id":"chevrolet"},{"model_name":"Tracker","model_make_id":"chevrolet"},{"model_name":"TrailBlazer","model_make_id":"chevrolet"},{"model_name":"Trans Sport","model_make_id":"chevrolet"},{"model_name":"Uplander","model_make_id":"chevrolet"},{"model_name":"Venture","model_make_id":"chevrolet"}],
          CHRYSLER: [{"model_name":"300","model_make_id":"chrysler"},{"model_name":"Concorde","model_make_id":"chrysler"},{"model_name":"Crossfire","model_make_id":"chrysler"},{"model_name":"Grand Voyager","model_make_id":"chrysler"},{"model_name":"LHS","model_make_id":"chrysler"},{"model_name":"Neon","model_make_id":"chrysler"},{"model_name":"Pacifica","model_make_id":"chrysler"},{"model_name":"PT Cruiser","model_make_id":"chrysler"},{"model_name":"Sebring","model_make_id":"chrysler"},{"model_name":"Town & Country","model_make_id":"chrysler"},{"model_name":"Voyager","model_make_id":"chrysler"}],
          DODGE: [{"model_name":"Caravan","model_make_id":"dodge"},{"model_name":"Charger","model_make_id":"dodge"},{"model_name":"Dakota","model_make_id":"dodge"},{"model_name":"Durango","model_make_id":"dodge"},{"model_name":"Grand Caravan","model_make_id":"dodge"},{"model_name":"Magnum","model_make_id":"dodge"},{"model_name":"Neon","model_make_id":"dodge"},{"model_name":"Nitro","model_make_id":"dodge"},{"model_name":"Ram","model_make_id":"dodge"},{"model_name":"Stratus","model_make_id":"dodge"},{"model_name":"Viper","model_make_id":"dodge"}],
          FORD: [{"model_name":"Crown Victoria","model_make_id":"ford"},{"model_name":"E-150","model_make_id":"ford"},{"model_name":"E-250","model_make_id":"ford"},{"model_name":"Econoline","model_make_id":"ford"},{"model_name":"Econovan","model_make_id":"ford"},{"model_name":"Escape","model_make_id":"ford"},{"model_name":"Escort","model_make_id":"ford"},{"model_name":"Excursion","model_make_id":"ford"},{"model_name":"Expedition","model_make_id":"ford"},{"model_name":"Explorer","model_make_id":"ford"},{"model_name":"F-150","model_make_id":"ford"},{"model_name":"F-250","model_make_id":"ford"},{"model_name":"F-350","model_make_id":"ford"},{"model_name":"Fairlane","model_make_id":"ford"},{"model_name":"Five Hundred","model_make_id":"ford"},{"model_name":"Focus","model_make_id":"ford"},{"model_name":"Freestar","model_make_id":"ford"},{"model_name":"Freestyle","model_make_id":"ford"},{"model_name":"Fusion","model_make_id":"ford"},{"model_name":"GT","model_make_id":"ford"},{"model_name":"Mustang","model_make_id":"ford"},{"model_name":"Ranger","model_make_id":"ford"},{"model_name":"Taurus","model_make_id":"ford"},{"model_name":"Thunderbird","model_make_id":"ford"},{"model_name":"Transit Connect","model_make_id":"ford"}],
          GMC: [{"model_name":"Canyon","model_make_id":"gmc"},{"model_name":"Envoy","model_make_id":"gmc"},{"model_name":"Jimmy","model_make_id":"gmc"},{"model_name":"Safari","model_make_id":"gmc"},{"model_name":"Savana","model_make_id":"gmc"},{"model_name":"Sierra","model_make_id":"gmc"},{"model_name":"Sonoma","model_make_id":"gmc"},{"model_name":"Yukon","model_make_id":"gmc"}],
          HONDA:[{"model_name":"Accord","model_make_id":"honda"},{"model_name":"Civic","model_make_id":"honda"},{"model_name":"CR-V","model_make_id":"honda"},{"model_name":"Element","model_make_id":"honda"},{"model_name":"Fit","model_make_id":"honda"},{"model_name":"Insight","model_make_id":"honda"},{"model_name":"Odyssey","model_make_id":"honda"},{"model_name":"Pilot","model_make_id":"honda"},{"model_name":"S2000","model_make_id":"honda"}],
          HYUNDAI:[{"model_name":"Accent","model_make_id":"hyundai"},{"model_name":"Azera","model_make_id":"hyundai"},{"model_name":"Coupe","model_make_id":"hyundai"},{"model_name":"Elantra","model_make_id":"hyundai"},{"model_name":"Santa Fe","model_make_id":"hyundai"},{"model_name":"Sonata","model_make_id":"hyundai"},{"model_name":"Tiburon","model_make_id":"hyundai"},{"model_name":"Tucson","model_make_id":"hyundai"},{"model_name":"XG 350","model_make_id":"hyundai"}],
          JAGUAR: [{"model_name":"S-Type","model_make_id":"jaguar"},{"model_name":"X-Type","model_make_id":"jaguar"},{"model_name":"XJ","model_make_id":"jaguar"},{"model_name":"XJ6","model_make_id":"jaguar"},{"model_name":"XJR","model_make_id":"jaguar"},{"model_name":"XK","model_make_id":"jaguar"},{"model_name":"XK8","model_make_id":"jaguar"},{"model_name":"XKR","model_make_id":"jaguar"}],
          JEEP: [{"model_name":"Cherokee","model_make_id":"jeep"},{"model_name":"Commander","model_make_id":"jeep"},{"model_name":"Grand Cherokee","model_make_id":"jeep"},{"model_name":"Liberty","model_make_id":"jeep"},{"model_name":"Wrangler","model_make_id":"jeep"}],
          KIA: [{"model_name":"Amanti","model_make_id":"kia"},{"model_name":"Optima","model_make_id":"kia"},{"model_name":"Rio","model_make_id":"kia"},{"model_name":"Sedona","model_make_id":"kia"},{"model_name":"Sephia II","model_make_id":"kia"},{"model_name":"Sorento","model_make_id":"kia"},{"model_name":"Spectra","model_make_id":"kia"},{"model_name":"Spectra5","model_make_id":"kia"},{"model_name":"Sportage","model_make_id":"kia"}],
          LEXUS: [{"model_name":"CT 200h","model_make_id":"Lexus"},{"model_name":"ES 300h","model_make_id":"Lexus"},{"model_name":"ES 350","model_make_id":"Lexus"},{"model_name":"GS 350","model_make_id":"Lexus"},{"model_name":"GS 450h","model_make_id":"Lexus"},{"model_name":"GX 460","model_make_id":"Lexus"},{"model_name":"IS 250","model_make_id":"Lexus"},{"model_name":"IS 250 C","model_make_id":"Lexus"},{"model_name":"IS 350","model_make_id":"Lexus"},{"model_name":"IS 350 C","model_make_id":"Lexus"},{"model_name":"LS 460","model_make_id":"Lexus"},{"model_name":"LS 600h L","model_make_id":"Lexus"},{"model_name":"LX 570","model_make_id":"Lexus"},{"model_name":"NX 200t","model_make_id":"Lexus"},{"model_name":"NX 300h","model_make_id":"Lexus"},{"model_name":"RC 350","model_make_id":"Lexus"},{"model_name":"RC F","model_make_id":"Lexus"},{"model_name":"RX 350","model_make_id":"Lexus"},{"model_name":"RX 450h","model_make_id":"Lexus"}],
         LINCOLN: [{"model_name":"MKC","model_make_id":"Lincoln"},{"model_name":"MKS","model_make_id":"Lincoln"},{"model_name":"MKT","model_make_id":"Lincoln"},{"model_name":"MKX","model_make_id":"Lincoln"},{"model_name":"MKZ","model_make_id":"Lincoln"},{"model_name":"Navigator","model_make_id":"Lincoln"}],
         MAZDA: [{"model_name":"CX-5","model_make_id":"Mazda"},{"model_name":"CX-9","model_make_id":"Mazda"},{"model_name":"Mazda3","model_make_id":"Mazda"},{"model_name":"Mazda5","model_make_id":"Mazda"},{"model_name":"Mazda6","model_make_id":"Mazda"},{"model_name":"MX-5 Miata","model_make_id":"Mazda"}],
         MERCEDESBENZ: [{"model_name":"C-Class","model_make_id":"Mercedes-Benz"},{"model_name":"CLA-Class","model_make_id":"Mercedes-Benz"},{"model_name":"CLS-Class","model_make_id":"Mercedes-Benz"},{"model_name":"E-Class","model_make_id":"Mercedes-Benz"},{"model_name":"G-Class","model_make_id":"Mercedes-Benz"},{"model_name":"GL-Class","model_make_id":"Mercedes-Benz"},{"model_name":"GLA-Class","model_make_id":"Mercedes-Benz"},{"model_name":"GLK-Class","model_make_id":"Mercedes-Benz"},{"model_name":"M-Class","model_make_id":"Mercedes-Benz"},{"model_name":"S-Class","model_make_id":"Mercedes-Benz"},{"model_name":"SL-Class","model_make_id":"Mercedes-Benz"},{"model_name":"SLK-Class","model_make_id":"Mercedes-Benz"},{"model_name":"SLS AMG GT Final Edition","model_make_id":"Mercedes-Benz"}],
         MINI: [{"model_name":"Cooper","model_make_id":"MINI"},{"model_name":"Cooper Countryman","model_make_id":"MINI"},{"model_name":"Cooper Coupe","model_make_id":"MINI"},{"model_name":"Cooper Paceman","model_make_id":"MINI"},{"model_name":"Cooper Roadster","model_make_id":"MINI"}],
         MITSUBISHI: [{"model_name":"Lancer","model_make_id":"Mitsubishi"},{"model_name":"Lancer Evolution","model_make_id":"Mitsubishi"},{"model_name":"Mirage","model_make_id":"Mitsubishi"},{"model_name":"Outlander","model_make_id":"Mitsubishi"},{"model_name":"Outlander Sport","model_make_id":"Mitsubishi"}],
         NISSAN: [{"model_name":"370Z","model_make_id":"Nissan"},{"model_name":"Altima","model_make_id":"Nissan"},{"model_name":"Armada","model_make_id":"Nissan"},{"model_name":"Frontier","model_make_id":"Nissan"},{"model_name":"GT-R","model_make_id":"Nissan"},{"model_name":"Juke","model_make_id":"Nissan"},{"model_name":"Leaf","model_make_id":"Nissan"},{"model_name":"Murano","model_make_id":"Nissan"},{"model_name":"NV200","model_make_id":"Nissan"},{"model_name":"Pathfinder","model_make_id":"Nissan"},{"model_name":"Quest","model_make_id":"Nissan"},{"model_name":"Rogue","model_make_id":"Nissan"},{"model_name":"Sentra","model_make_id":"Nissan"},{"model_name":"Versa","model_make_id":"Nissan"},{"model_name":"Versa Note","model_make_id":"Nissan"},{"model_name":"Xterra","model_make_id":"Nissan"}],
         PORSCHE: [{"model_name":"911","model_make_id":"Porsche"},{"model_name":"918 Spyder","model_make_id":"Porsche"},{"model_name":"Boxster","model_make_id":"Porsche"},{"model_name":"Cayenne","model_make_id":"Porsche"},{"model_name":"Cayman","model_make_id":"Porsche"},{"model_name":"Macan","model_make_id":"Porsche"},{"model_name":"Panamera","model_make_id":"Porsche"}],
         SUBARU: [{"model_name":"BRZ","model_make_id":"Subaru"},{"model_name":"Forester","model_make_id":"Subaru"},{"model_name":"Impreza","model_make_id":"Subaru"},{"model_name":"Legacy","model_make_id":"Subaru"},{"model_name":"Outback","model_make_id":"Subaru"},{"model_name":"WRX","model_make_id":"Subaru"},{"model_name":"XV Crosstrek","model_make_id":"Subaru"}],
         TOYOTA: [{"model_name":"4Runner","model_make_id":"Toyota"},{"model_name":"Avalon","model_make_id":"Toyota"},{"model_name":"Avalon Hybrid","model_make_id":"Toyota"},{"model_name":"Camry","model_make_id":"Toyota"},{"model_name":"Camry Hybrid","model_make_id":"Toyota"},{"model_name":"Corolla","model_make_id":"Toyota"},{"model_name":"Highlander","model_make_id":"Toyota"},{"model_name":"Highlander Hybrid","model_make_id":"Toyota"},{"model_name":"Land Cruiser","model_make_id":"Toyota"},{"model_name":"Prius","model_make_id":"Toyota"},{"model_name":"Prius c","model_make_id":"Toyota"},{"model_name":"Prius Plug-in","model_make_id":"Toyota"},{"model_name":"Prius v","model_make_id":"Toyota"},{"model_name":"RAV4","model_make_id":"Toyota"},{"model_name":"Sequoia","model_make_id":"Toyota"},{"model_name":"Sienna","model_make_id":"Toyota"},{"model_name":"Tacoma","model_make_id":"Toyota"},{"model_name":"Tundra","model_make_id":"Toyota"},{"model_name":"Venza","model_make_id":"Toyota"},{"model_name":"Yaris","model_make_id":"Toyota"}],
        VOLKSWAGEN: [{"model_name":"Beetle","model_make_id":"Volkswagen"},{"model_name":"Beetle Convertible","model_make_id":"Volkswagen"},{"model_name":"CC","model_make_id":"Volkswagen"},{"model_name":"e-Golf","model_make_id":"Volkswagen"},{"model_name":"Eos","model_make_id":"Volkswagen"},{"model_name":"Golf","model_make_id":"Volkswagen"},{"model_name":"Golf GTI","model_make_id":"Volkswagen"},{"model_name":"Golf R","model_make_id":"Volkswagen"},{"model_name":"Golf SportWagen","model_make_id":"Volkswagen"},{"model_name":"Jetta","model_make_id":"Volkswagen"},{"model_name":"Passat","model_make_id":"Volkswagen"},{"model_name":"Tiguan","model_make_id":"Volkswagen"}],
        VOLVO:[{"model_name":"S60","model_make_id":"Volvo"},{"model_name":"S80","model_make_id":"Volvo"},{"model_name":"V60","model_make_id":"Volvo"},{"model_name":"V60 Cross Country","model_make_id":"Volvo"},{"model_name":"XC60","model_make_id":"Volvo"},{"model_name":"XC70","model_make_id":"Volvo"}]
        }

    }

  render(){
    const { handleSubmit, pristine, reset, submitting, hasMake } = this.props
    console.log('this is hasmake', hasMake);
    let models = [];
    let theModels = [];
    models = this.state[hasMake];
    console.log('these are the models', models);
    if(models !== undefined){
     theModels = models.map((item)=>
     <option value={item.model_name}>{item.model_name}</option>
   );
}

// console.log('these are theModels', theModels);

    console.log('thesse are the models', models);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="Make" component="select">
            <option></option>
            <option value="ACURA">ACURA</option>
            <option value="AUDI">AUDI</option>
            <option value="BMW">BMW</option>
            <option value="BUICK">BUICK</option>
            <option value="CADILLAC">CADILLAC</option>
            <option value="CHEVROLET">CHEVROLET</option>
            <option value="CHRYSLER">CHRYSLER</option>
            <option value="DODGE">DODGE</option>
            <option value="FORD">FORD</option>
            <option value="GMC">GMC</option>
            <option value="HONDA">HONDA</option>
            <option value="HYUNDAI">HYUNDAI</option>
            <option value="JAGUAR">JAGUAR</option>
            <option value="JEEP">JEEP</option>
            <option value="KIA">KIA</option>
            <option value="LEXUS">LEXUS</option>
            <option value="LINCOLN">LINCOLN</option>
            <option value="MAZDA">MAZDA</option>
            <option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
            <option value="MERCURY">MERCURY</option>
            <option value="MINI">MINI</option>
            <option value="MITSUBISHI">MITSUBISHI</option>
            <option value="NISSAN">NISSAN</option>
            <option value="PORSCHE">PORSCHE</option>
            <option value="SUBARU">SUBARU</option>
            <option value="TOYOTA">TOYOTA</option>
            <option value="VOLKSWAGEN">VOLKSWAGEN</option>
            <option value="VOLVO">VOLVO</option>
          </Field>
        </div>
        <div>
            <Field name="model" component="select">
              <option />
              {theModels}
            </Field>
        </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
      </div>
    </form>
  )
  }
}



SelectionForm =reduxForm({
  form: 'SelectionForm' // a unique identifier for this form
})(SelectionForm)

const selector = formValueSelector('SelectionForm') // <-- same as form name
SelectionForm = connect(
  state => {
    // can select values individually
    const hasMake = selector(state, 'Make')
    return {
      hasMake,
    }
  }
)(SelectionForm)


export default SelectionForm;
