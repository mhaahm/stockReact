import React,{Component} from "react";

class StockErrorMgr extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        this.setState(() => {
            return { error: error.message+" "+errorInfo.componentStack }
        })
    }

    render() {
        console.log(this.state.error)

        if(this.state.hasError) {
            return <div className="alert alert-danger" style={{overflow: 'scroll'}}>
                { this.state.error }
            </div>
        }
        return this.props.children
    }
}

export default StockErrorMgr