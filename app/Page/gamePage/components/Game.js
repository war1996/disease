import React from 'react'
import './game.scss'
import { Upload, Icon, message,Button,Modal } from 'antd';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
              uid: -1,
              name: 'xxx.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
          };
              this.beginGame = this.beginGame.bind(this)
              this.handleCancel = this.handleCancel.bind(this)
              this.handlePreview = this.handlePreview.bind(this)
    }
    
    beginGame(){
        console.log("开始游戏");
        this.props.beginGame();
    }

    // handleCancel = () =>{
    //     this.setState({ previewVisible: false })
        
    //   } 
    handleCancel(){
        this.setState({ previewVisible: false })
    }
    
    //   handlePreview = (file) => {
  
    //     this.setState({
    //       previewImage: file.url || file.thumbUrl,
    //       previewVisible: true,
    //     });
    //   }
    handlePreview(file){
            this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        });
    }
    
    //   handleChange = ({ fileList }) => {
    //     console.log(fileList)
    //     this.setState({ fileList })
    //   }
    handleChange({ fileList }){
        console.log(fileList)
        this.setState({ fileList })
    }
	render(){
        const imageUrl = this.state.imageUrl;    
        const uploadButton = (
            <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
            </div>
            );  
		return(
        <div className="view-port-1024 first-test">
	        <div className="wrapG">
                <div className="game1">
   
                 {/* let { previewImage, fileList } = this.state; */}
                {/* let {previewImage} = this.state; */}
        <div className="clearfix">
          <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={this.state.fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {this.state.fileList.length >= 3 ? null : uploadButton}
          </Upload>
          <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
          </Modal>
        </div>
                </div>
               <div className="game2">
                   <div className="imgs">
                       <Button type="primary" onClick={this.beginGame}>begin</Button>
                   </div>
               </div>
            </div>        
        </div>)
	}
}

// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
//   }
  
//   function beforeUpload(file) {
//     const isJPG = file.type === 'image/jpeg';
//     if (!isJPG) {
//       message.error('You can only upload JPG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error('Image must smaller than 2MB!');
//     }
//     return isJPG && isLt2M;
//   }