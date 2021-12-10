import React, { Component } from 'react'
import { Modal,View,Text,StyleSheet, Image,TouchableOpacity } from 'react-native'

class CustomAlert extends Component {
    static alertInstance
    constructor(props){
        super(props)
        this.state={
            visible:false,
            text:"",
            message:"",
            image:null,
            androidDefault:{
                container: {
                    backgroundColor: (props.android && props.android.container && props.android.container.backgroundColor) || '#FAFAFA',
                  },
                  title: {
                    color: (props.android && props.android.title && props.android.title.color) || '#000000',
                    fontFamily: (props.android && props.android.title && props.android.title.fontFamily) || 'initial',
                    fontSize: (props.android && props.android.title && props.android.title.fontSize) || 22,
                    fontWeight: (props.android && props.android.title && props.android.title.fontWeight) || 'bold',
                  },
                  message: {
                    color: (props.android && props.android.message && props.android.message.color) || '#000000',
                    fontFamily: (props.android && props.android.message && props.android.message.fontFamily) || 'initial',
                    fontSize: (props.android && props.android.message && props.android.message.fontSize) || 15,
                    fontWeight: (props.android && props.android.message && props.android.message.fontWeight) || 'normal',
                  },
                  button: {
                    color: '#387ef5',
                    fontFamily: 'initial',
                    fontSize: 80,
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    backgroundColor: 'transparent',
                  },
            }
        }
        CustomAlert.alertInstance = this
    }
    static show(text,message,image){
        CustomAlert.alertInstance._show(text,message,image)
    }
    _show(text,message,image){
        this.setState({visible:true,text,message,image})
    }
    render() {
        return (
            // <View>
                <Modal 
                animationType={'slide'}
                transparent={true}
                visible={this.state.visible} 
                onRequestClose={()=>{
                    this.setState({visible:!this.state.visible})
                }}

                >
                <TouchableOpacity style={[styles.androidBackdrop,styles.backdrop]} onPress={()=>{this.setState({visible:false})}}>
                <View style={[styles.alertBox]}>
                    <View style={[styles.androidAlertBox,this.state.androidDefault.container]}>
                    {/* <Image source={this.state.image} style={{width:25}} /> */}
                    <Text style={[styles.androidTitle,this.state.androidDefault.title]}>{this.state.text}</Text>
                    <Text style={[styles.androidMessage, this.state.androidDefault.message]}>{this.state.message}</Text>
                    </View>
                </View>
                </TouchableOpacity>
                </Modal>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      androidBackdrop: {
        backgroundColor: "pink",
        opacity: 0.32
      },
      backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      alertBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      androidAlertBox: {
        maxWidth: 500,
        width: '100%',
        margin: 48,
        elevation: 20,
        borderRadius: 2,
      },
      androidTitle: {
        margin: 24,
      },
      androidMessage: {
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24,
      },
      androidButtonGroup: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 8,
        marginLeft: 24,
      },
      androidButton: {
        marginTop: 12,
        marginRight: 8,    
      },
      androidButtonInner: {
        padding: 10,
    
      }
})

export default CustomAlert
