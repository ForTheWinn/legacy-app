import React from "react";
import className from "classnames";
import { FaAngleLeft } from "react-icons/fa";

const withDetail = (ListComponent: any, DetailComponent: any) => {
  return class List extends React.PureComponent {
    state = {
      data: undefined,
    };

    onOpen = (data: any) => {
      this.setState({
        data,
      });
    };

    onClose = () => {
      this.setState({ data: undefined });
    };

    render() {
      const { data } = this.state;
      return (
        <div className="is-relative">
          <div className={className(data ? "is-hidden" : "")}>
            <ListComponent {...this.props} onClick={this.onOpen} />
          </div>
          {data ? (
            <div>
              <div>
                <button
                  onClick={this.onClose}
                  type="button"
                  className="button is-small is-light"
                >
                  <FaAngleLeft /> Back to list
                </button>
                <div style={{ padding: "15px" }}>
                  <DetailComponent {...this.props} data={data} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      );
    }
  }
};

export default withDetail;
