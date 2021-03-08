import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            lists: [],
            name: "",
            adress: "",
            content: "",
            liked: false
        }

        this.handleLiked = this.handleLiked.bind(this);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} id="form">
                    <div className="wrap">
                    <InputForm name="name" doChange={this.handleChange} value={this.state.name}/>
                    <InputForm name="adress" doChange={this.handleChange} value={this.state.adress}/>
                    <InputForm name="content" doChange={this.handleChange} value={this.state.content}/>
                    </div>
                    <input type="submit" value="Tweet"/>
                </form>
                {
                    this.state.lists.map((value, index) => (
                        <div className="tweet">
                            <div className="body-container">
                                <div className="status-display">
                                    <span className="display-name">{value.name}</span>
                                    <span className="display-adress">@{value.adress}</span>
                                </div>
                                <div className="display-content">{value.content}</div>
                                <span className="liked" onClick={this.handleLiked} data-num={index}>{ value.liked ? '💓' : '🤍' }</span>
                            </div>

                        </div>
                    ))
                }
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            lists:[
                ...this.state.lists,{
                    name: this.state.name,
                    adress: this.state.adress,
                    content: this.state.content,
                    liked: this.state.liked
                }
            ],
            name: "",
            adress: "",
            content: "",
            liked: false
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleLiked = (event) => {
        event.preventDefault();

        let copyLists = this.state.lists.slice(); // 配列を複製

        let index = event.currentTarget.getAttribute('data-num'); // custom index input
        let toggleLiked = copyLists[index].liked;

        copyLists[index].liked = !toggleLiked; // liked change

        this.setState({lists: copyLists}); // state array change

    }


}

class InputForm extends Component {

    render(){
        return (
            <div>
                <label>
                    {this.props.name}:
                    <input type="text" name={this.props.name} onChange={this.props.doChange} value={this.props.value} className={this.props.name}/>
                </label>
            </div>
        )
    }
}
export default Form;
