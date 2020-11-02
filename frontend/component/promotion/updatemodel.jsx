import React from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'


// internal
import {updatePromotion} from '../../schema/promotion'
import {HandleAuth} from '../../service/config'
import {UpdatePromotion, GetPromotionId} from '../../service/promotion'

const UpdateModal = props => {
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
         validationSchema: updatePromotion
      })
      const fetchById = async () => {
        try {
          if (props.promotionId) {
            const { data } = await GetPromotionId(props.promotionId)
            if (data.code === 'OK') {
                setValue('promotion_name', data.results.promotion_name)
                setValue('description', data.results.description)
                setValue('discount', data.results.discount)
            } else {
              props.messErr()
            }
          }
        } catch (error) {
          HandleAuth(error)
        }
      }
      const Closeupdate = () =>{
      clearError()
      setValue('promotion_name', '')
      setValue('description', '')
      setValue('discount', '')
      props.Closeupdate()
      }

      const onSubmit = handleSubmit(async (value) => {
        if (props.promotionId) {
          try {
            const { data } = await UpdatePromotion(props.promotionId, value)
           if(data.code === 'OK'){
             props.getPromotion()
             props.Closeupdate()

           }
          } catch (error) {
            HandleAuth(error)
          }
        }
      })
      React.useEffect(() => {
        fetchById()
      }, [props.promotionId])
    return(
<div
      className={classnames('modal fade animated', { 'show fadeInDown': props.modalupdate })}
      style={{ display: props.modalupdate ? 'block' : 'none', overflowY: 'auto' }}
    >
      <div className="modal-dialog modal-box-shadown" role="document">
        <div className="modal-content">
          <Form onSubmit={onSubmit}>
            <ModalHeader>แก้ไขโปรโมชั่น</ModalHeader>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12 mt-2">
                  <label htmlFor="Promotion_name" className="mr-sm-2">
                    ชื่อโปรโมชั่น
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.promotion_name })}
                    name="promotion_name"
                    id="promotion_name"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.promotion_name && errors.promotion_name.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="Description" className="mr-sm-2 mt-2">
                    รายละเอียด
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.description })}
                    name="description"
                    id="description"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.description && errors.description.message}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="discount" className="mr-sm-2 mt-2">
                    ส่วนลด
                  </label>
                  <input
                    type="text"
                    className={classnames('Selectd form-control',{ 'is-invalid': !!errors.discount })}
                    name="discount"
                    id="discount"
                    ref={register}
                  />
                  <div className="invalid-feedback">{errors.discount && errors.discount.message}</div>
                </div>
            </div>
            </div>
            
            <ModalFooter>
              <Button type="submit" className="btn btn-primary">
                ยืนยัน
              </Button>
              <Button type="button" className="btn btn-light" onClick={Closeupdate}>
                ยกเลิก
              </Button>
            </ModalFooter>
          </Form>
        </div>
      </div>
    </div>
    )
}
export default UpdateModal