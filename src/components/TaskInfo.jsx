import React, { Component } from "react";

class TaskInfo extends Component {
    render() {
        return this.props.currentTask ? (
            <div>
                <div style={{ marginBottom: "20px" }}>
                    <div style={{ float: "left", marginRight: "15px" }}>
                        <b>{this.props.currentTask.title}</b>
                    </div>
                    <div>
                        <span className="badge bg-secondary">
                            {this.props.currentTask.stage}
                        </span>
                    </div>
                    <hr />
                    {this.props.currentTask.body}
                </div>
                <div>
                    <button
                        onClick={() =>
                            this.props.closeTask(this.props.currentTask.id, 1)
                        }
                        type="button"
                        className="button btn-success rounded"
                        style={{ width: "40%", marginRight: "18%" }}
                    >
                        Подписать
                    </button>
                    <button
                        onClick={() =>
                            this.props.closeTask(this.props.currentTask.id, 2)
                        }
                        type="button"
                        className="button btn-success rounded"
                        style={{ width: "40%" }}
                    >
                        Отклонить
                    </button>
                </div>
            </div>
        ) : null;
    }
}

export default TaskInfo;
