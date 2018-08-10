import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Player, BigPlayButton, LoadingSpinner  } from 'video-react';
import { Card, Button, CardTitle, CardBody, Col } from 'reactstrap';

export default class Example extends Component {
    constructor() {
   
        super();
        this.state = {
            videos: [],
            selectedVideo: '',
        }
      }
      componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/videos`)
          .then(res => {
            console.log(res.data)
            const videos = res.data;
            this.setState({ videos });
          })
      };
      selectVideo(video){
        this.setState({ selectedVideo : video });
        console.log(this.state.selectedVideo);
     };
    render() {
        return (
            <div className="container">
            <Player
                playsInline
                src={`/storage/video/${this.state.selectedVideo}`}>
                <BigPlayButton position="center" />
                <LoadingSpinner />
            </Player>
                    { this.state.videos.map((video,i) => 
                    <Card key={i}>
                    <CardBody>
                        <CardTitle>
                            {video}
                        </CardTitle>
                        <Button onClick={() => this.selectVideo(video)}>Play </Button>
                    </CardBody>
                    </Card>)}   
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
