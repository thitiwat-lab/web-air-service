import React from 'react'
import { Button, ModalHeader, ModalFooter, Form } from 'reactstrap'
import { useForm } from 'react-hook-form'
import classnames from 'classnames'

// internal
import {HandleAuth} from '../../service/config'
import {UpdateStatusIncomes} from '../../schema/income'
import {UpdateStatusIncome} from '../../service/income'

const UpdateStatus = props =>{
    const { handleSubmit, register, errors, clearError, setValue } = useForm({
        validationSchema: UpdateStatusIncomes
    })
    const Closestatus = () =>{
      setValue('status', '')
      clearError()
      props.CloseModalStatus()
    }
    const onSubmit = handleSubmit(async (value) =>{
      if(props.statusId){
        try{
          const {data} = await UpdateStatusIncome(props.statusId, value)
          if(data.code === 'OK'){
            props.getIncomes()
            Closestatus()
          }
        }catch (error) {
          HandleAuth(error)
        }
      }
    })

    React.useEffect(() =>{
    }, [props.statusId])

    return(
        <div
        className={classnames('modal fade animated', { 'show fadeInDown': props.updatestatus })}
        style={{ display: props.updatestatus ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
          <Form onSubmit={onSubmit}>
            <ModalHeader className="mt-3"></ModalHeader>
            <div className="modal-body mt-3">
              <p style={{ textAlign: 'center', fontSize: '22px', color:'green'  }}>
                <i className="far fa-check-circle"></i> ยืนยันการจ่ายเงิน
                 </p>
                <input type="hidden" value="จ่ายแล้ว" name="status" id="status" ref={register} />
                </div>
              <ModalFooter>
                <Button  type="submit" className="btn btn-primary"  >
                  ยืนยัน
                </Button>
                <Button type="button" className="btn btn-light" onClick={Closestatus} >ยกเลิก</Button>
              </ModalFooter>
              </Form>
          </div>
        </div>
      </div>
    )
}
export default UpdateStatus