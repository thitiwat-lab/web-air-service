import React from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'

// internal
import {AirSchema} from '../../schema/airconditioning'
import {HandleAuth} from '../../service/config'
import {CreateAir} from '../../service/airconditioning'

const AirModel = props =>{
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
        validationSchema: AirSchema
     })
     const CloseModal = () => {
        setVal()
        clearError()
        props.CloseModal()
    }
    // setvalue
    const setVal = () => {
      setValue('name_air', '')
      setValue('btu', '')
      setValue('price', '')
      props.CloseModal()
    }
    //create
const onSubmit = handleSubmit(async values => {
    try {
        const { data } = await CreateAir(
          values.name_air,
          values.btu,
          values.price,
        )
        if (data.code === 'OK') {
          props.GetAirs()
          setVal()
        }else {
          props.messErr()
        }
    } catch (error) {
      HandleAuth(error)
    }
  })
    React.useEffect(() => {}, [])
     return(
        <div
        className={classnames('modal fade animated', { 'show fadeInDown': props.modal })}
        style={{ display: props.modal ? 'block' : 'none', overflowY: 'auto' }}
      >
        <div className="modal-dialog modal-box-shadown" role="document">
          <div className="modal-content">
            <Form onSubmit={onSubmit}>
              <ModalHeader>Airconditioning</ModalHeader>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="Name_Air" className="mr-sm-2 mt-2">
                    Name_Air
                    </label>
                    <input
                      type="text"
                      className={classnames('Selectd form-control',{ 'is-invalid': !!errors.name_air })}
                      name="name_air"
                      id="name_air"
                      ref={register}
                    />
                    <div className="invalid-feedback">{errors.name_air && errors.name_air.message}</div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="btu" className="mr-sm-2 mt-2">
                      BTU
                    </label>
                    <select className="Selectd form-control" name="btu" id="btu" ref={register}>
                        <option value=""></option>
                        <option value="9000">9,000 BTU</option>
                        <option value="12000">12,000 BTU</option>
                        <option value="15000">15,000 BTU</option>
                        <option value="18000">18,000 BTU</option>
                        <option value="24000">24,000 BTU</option>
                      </select>
                    <div className="invalid-feedback">{errors.btu && errors.btu.message}</div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="Price" className="mr-sm-2 mt-2">
                      Price
                    </label>
                    <input
                      type="text"
                      className={classnames('Selectd form-control',{ 'is-invalid': !!errors.price })}
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
                <Button type="button" className="btn btn-light" onClick={CloseModal}>
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </div>
        </div>
      </div>
     )
}
export default AirModel