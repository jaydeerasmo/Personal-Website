class ProjectGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  render(){
    return(
        <p>This is coming from a script!</p>
    );
  }
}

const domContainer = document.querySelector('#projects_gallery');
ReactDOM.render(<ProjectGallery/>, domContainer);
