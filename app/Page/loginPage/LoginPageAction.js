
export const POST_LOGIN_MESSAGE = "POST_LOGIN_MESSAGE"

export function postPictures(uname,upass) {
    //payload--传过去的参数
    const payload={uname,upass}
    //调用接口
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "http://172.29.28.9/bdc/banner/info?area=HOME_PAGE_TOP", true)
    xhr.withCredentials = true
    xhr.send()
    xhr.onreadystatechange = () =>{
        if(xhr.readyState == XMLHttpRequest.DONE){
            console.log("22222")
            if(xhr.status == 200){
                console.log("3333")
                let gotServices = JSON.parse(xhr.responseText)
                console.log(gotServices)
                const id = gotServices.data[0].id;
                // console.log(age);
                document.cookie=id;
                //将token存入cookie
            }
        }
    }
    return {
      type: POST_LOGIN_MESSAGE,
    };
}