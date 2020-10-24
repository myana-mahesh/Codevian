import React from "react";
import axios from 'axios';
import ImageUploader from 'react-images-upload';

class Posting extends React.Component {
  constructor(props){
    super(props);
    this.state = { pictures: [],imgId:"" };
    this.onDrop = this.onDrop.bind(this);

  };
  
  

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        const pic=this.state.pictures;
        axios.post(`https://jsonplaceholder.typicode.com/photos`, { pic})
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({imgId:<div>image posted</div>});
      })
    }

    render() {
        return (
            <>
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            <div style={{textAlign:"center"}}>
                 {this.state.imgId}
            </div>
            </>
        );
    }

}

export default Posting;