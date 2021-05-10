import React, {useState} from 'react'
import classnames from 'classnames'
import {GetIdNews} from '../../service/news'

const ModalImg = props =>{

    const [dataimg, setDataimg] = useState('')

    const Close = () => {
       props.CloseModal()
    }
    const getimg = async ()=>{
        const {data} = await GetIdNews(props.idimg)
        if(data.code === 'OK'){
            setDataimg(data.results.name)
            }
    }
    React.useEffect(() => {
        getimg()
    }, [props.idimg])

    return(
        <div className={classnames('modal fade animated backpopup', { 'show fadeInDown': props.modal })}
        style={{ display: props.modal ? 'block' : 'none', overflowY: 'auto' }}>
            <button type="button" className="btn btn-outline-danger colsr-bt" onClick={Close}>&times;</button>
        <div className="modal-dialog image-popup">
           <img src={"http://localhost:3001/news/imgpath/" + dataimg} className="img-in-popup" alt="test" />
        </div>
        </div>
    )
}
export default ModalImg