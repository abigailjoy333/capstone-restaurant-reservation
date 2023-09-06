import React from "react"
import { useHistory } from "react-router"

export default function Form({
    initialFormData,
    handleFormChange,
    handleSubmit,
}) {
    const history = useHistory()

    const handleCancel = () => {
        history.goBack()
    }

    return (
        initialFormData && (
          <form onSubmit={handleSubmit} className="form-group">
            <fieldset>
              <legend className="d-flex justify-content-center">
                Guest Information
              </legend>
              <div className="pb-1">
                <input
                  type="text"
                  name="first_name"
                  className="form-control"
                  id="first_name"
                  placeholder={initialFormData?.first_name || "First Name"}
                  value={initialFormData?.first_name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="pb-1">
                <input
                  type="text"
                  name="last_name"
                  className="form-control"
                  id="last_name"
                  placeholder={initialFormData?.last_name || "Last Name"}
                  value={initialFormData?.last_name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="pb-1">
                <input
                  type="tel"
                  name="mobile_number"
                  className="form-control"
                  id="mobile_number"
                  placeholder={initialFormData?.mobile_number || "Mobile Number"}
                  value={initialFormData?.mobile_number}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="pb-1">
                <input
                  type="number"
                  name="people"
                  className="form-control"
                  id="people"
                  placeholder={initialFormData?.people || "Number of guests"}
                  value={initialFormData?.people}
                  onChange={handleFormChange}
                  required
                  min="1"
                />
              </div>
    
              <input
                type="date"
                name="reservation_date"
                className="form-control mb-1"
                id="reservation_date"
                placeholder={initialFormData?.reservation_date || "YYY-MM-DD"}
                value={initialFormData?.reservation_date}
                onChange={handleFormChange}
                required
              />
              <input
                type="time"
                name="reservation_time"
                className="form-control"
                id="reservation_time"
                placeholder={initialFormData?.reservation_time || "HH:MM"}
                value={initialFormData?.reservation_time}
                onChange={handleFormChange}
                required
              />
            </fieldset>
            <div className="d-flex justify-content-center pt-2">
              <button type="submit" className="btn btn-primary mr-1">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        )
    )
}