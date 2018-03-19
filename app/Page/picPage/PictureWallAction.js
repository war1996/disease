
export const POST_PIC_WALL = "POST_PIC_WALL"

export function postPictures() {
    console.log("猪")
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "http://172.29.28.18:8000/upload", true)
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
      type: POST_PIC_WALL,
    };
}