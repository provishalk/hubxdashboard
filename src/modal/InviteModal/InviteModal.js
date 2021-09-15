import React, { useState } from "react";
import _ from "lodash";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BiRupee } from 'react-icons/bi';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./InviteModal.scss";

const DUMMY_DATA = [
  { name: "Group A", value: 1 },
  { name: "Group B", value: 1 },
];
const COLORS = ["#0088FE", "#55CCC1"];

const InviteModal = (props) => {
  const [data, setData] = useState(DUMMY_DATA);
  const onInviteChange = (event) => {
    setData((oldData) => {
      let clonePosts = _.cloneDeep(oldData);
      clonePosts[0].value = parseInt(event.target.value);
      return clonePosts;
    });
  };
  const onDurationChange = (event) => {
    setData((oldData) => {
      let clonePosts = _.cloneDeep(oldData);
      clonePosts[1].value = parseInt(event.target.value);
      return clonePosts;
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <div className="invite-modal__header">
          <div className="invite-modal__header__invite">
            <h5>Invite</h5>
          </div>
          <div className="invite-modal__header__calculator">
            <h5>Price calculator</h5>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="invite-modal__body">
          <div className="invite-modal__body__invite">
            <Form>
              <div className="invite-modal__body__invite__input-container">
                <Form.Control type="email" placeholder="Email" />
              </div>

              <div className="invite-modal__body__invite__btn-container">
                <button
                  className="invite-modal__body__invite__invite-btn"
                  onClick={(event) => {
                    event.preventDefault();
                  }}
                >
                  Invite
                </button>
              </div>
            </Form>
          </div>
          <div className="invite-modal__body__calculator">
            <div className="invite-modal__body__invite_counter">
              <label
                htmlFor="customRange3"
                className="form-label invite-modal__body__invite_counter__label"
              >
                No. Of Invites
              </label>
              <p className="invite-modal__body__invite_counter__count">{data[0].value}</p>
            </div>
            <input
              type="range"
              className="form-range"
              min="1"
              max="20"
              step="1"
              id="customRange3"
              defaultValue="0"
              onChange={onInviteChange}
            />
            <div className="invite-modal__body__invite_counter">
              <label
                htmlFor="customRange3"
                className="form-label invite-modal__body__invite_counter__label"
              >
                Duration Of Event (Hour)
              </label>
              <p className="invite-modal__body__invite_counter__count">{data[1].value}</p>
            </div>
            <input
              type="range"
              className="form-range invite-modal__body__duration-range"
              min="1"
              max="10"
              step="1"
              id="customRange4"
              defaultValue="0"
              onChange={onDurationChange}
            />
            <div className="graphical-representation__graph">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={300} height={200}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="invite-modal__price_container">
              <p>Total Value</p>
              <h5><BiRupee/>{data[0].value*(data[1].value*499)}</h5>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="default" className="invite-modal__close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InviteModal;
