export const BEGIN_GAME = "BEGIN_GAME"

export function beginGame() {
    console.log("1111")
    //调用接口
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "http://172.29.28.9/bdc/banner/info?area=HOME_PAGE_TOP", true)
    xhr.withCredentials = true
    xhr.send()
    xhr.onreadystatechange = () =>{
        if(xhr.readyState == XMLHttpRequest.DONE){
            console.log("22222")
            if(xhr.status == 200){
                console.log("33333")
                let gotServices = JSON.parse(xhr.responseText)
                console.log(gotServices)
                const id = gotServices.data[0].id;
            }
        }
    }
    return {
      type: BEGIN_GAME,
    };
}