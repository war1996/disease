import { Upload, Icon, Modal } from 'antd';
import React from 'react';
import './index.scss'
// import './game.scss'
class PictureWall extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            disease:''
          };
            //   this.beginGame = this.beginGame.bind(this)
              this.handleCancel = this.handleCancel.bind(this)
              this.handlePreview = this.handlePreview.bind(this)
              this.handleChange = this.handleChange.bind(this)

    }
  
    handleCancel(){
      this.setState({ previewVisible: false,disease:'' })
      
    } 
  
    handlePreview(file){

      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    }
    handleChange(file){
      this.setState({ fileList: file.fileList})
      let issue = this.state.fileList[0].response.classify
      console.log(issue)
      if(issue){
          this.setState({
              disease:issue
          })
      }
    }  
       
    render(){
      const { previewVisible, previewImage, fileList } = this.state;
      const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      return (
        <div className="wrapG">
          <div className="game1">
             <Upload    
               action="//172.29.28.18:8000/upload/"
               listType="picture-card"
               fileList={fileList}
               onPreview={this.handlePreview}
               onChange={this.handleChange}
               name="image"
              >
              {fileList.length >= 1 ? null : uploadButton}
             </Upload>
             <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
             <img alt="example" style={{ width: '100%' }} src={previewImage} />
             </Modal>
             <div className="dessia">{this.state.disease}</div>
          </div>
          <div className="game2">
  
          </div>
        </div>
      );
    }
  }
  
export default PictureWall