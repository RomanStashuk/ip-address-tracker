import Component from '../core/component';
import Form from '../core/form';
import InfoComponent from './info.component';

class SearchComponent extends Component {
  constructor(id) {
    super(id);
    this.outputInfoComponent = new InfoComponent('info');
  }

  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));

    this.form = new Form(this.$el, this.$el.ip);
  }
}

function submitHandler(evt) {
  evt.preventDefault();

  if (this.form.isValid()) {
    const data = this.form.value();
    this.outputInfoComponent.setInfo(data);
  }
  this.form.clear();
}

export default SearchComponent;
