import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'

// internal
import {UpdateSchema} from '../../schema/airconditioning'
import {HandleAuth} from '../../service/config'
import {EditAir} from '../../service/airconditioning'
const UpdateModal = props => {
    const { handleSubmit, register, errors, setValue, clearError } = useForm({
      validationSchema: UpdateSchema,
    })
    const Closeupdate = () => {
        setValue('Price', '')
        clearError()
        props.Closeupdate()
      }
      const Submit = handleSubmit(async (value) =>{
        if(props.airId){
          try{
            const {data} = await EditAir(props.airId, value)
            if(data.code === 'OK'){
              props.GetAirs()
              Closeupdate()
            }else {
              props.messErr()
            }
          } catch (error) {
            HandleAuth(error)
          }
        }
      })
      React.useEffect(() => {
      },[props.airId])

    return(
        <div
      className={classnames('modal fade animated', { 'show fadeInDown': props.modalupdate })}
      style={{ display: props.modalupdate ? 'block' : 'none', overflowY: 'auto' }}
    >
      <div className="modal-dialog modal-box-shadown" role="document">
        <div className="modal-content">
          <Form onSubmit={Submit}>
            <ModalHeader>Update Aircondition</ModalHeader>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 mt-2">
                  <label htmlFor="price" className="mr-sm-2">
                  Price
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control', { 'is-invalid': !!errors.price })}
                    name="price"
                    id="price"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.price && errors.price.message}</div>
                </div>
          </div>
        </div>
          <ModalFooter>
              <Button type="submit" className="btn btn-primary" >
                  Save
              </Button>
              <Button type="button" className="btn btn-light" onClick={Closeupdate}>
                  Cancel
              </Button>
              </ModalFooter>
            </Form>
        </div>
      </div>
    </div>
)
}
export default UpdateModal