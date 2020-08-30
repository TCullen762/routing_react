import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";


//not 100% ran out of time


class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        category: "",
        
      },
      score: 0,
      formData: { answer: '' }
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const points = this.state.data.value
    if (this.state.formData.answer === this.state.data.answer) {
      this.setState((state) => ({
        score: state.score + points,
        

      }))
    } else {
      this.setState((state) => ({
        score: state.score - points,
        answer:''
        
        
      }))
      

    }
    this.getNewQuestion()
    

  }

  

 
  //display the results on the screen
  render() {


    return (

      <div>

        <strong>Question:</strong>{this.state.data.question}
        <br />
        <strong>Points:</strong>{this.state.data.value}
        <div className="contact">
          <form onSubmit={this.handleSubmit}>
            <div>
              <strong>Category: </strong>{this.state.data.category.title}
              <br />
              <br />
              <label htmlFor="Answer">Answer:  </label>
              <input type="text"
                name="answer"
                value={this.state.formData.answer}
                onChange={this.handleChange}
              />


              <br />
              <strong>Score:</strong>{this.state.score}
              <br />
              <button>Submit </button>
              
              <br/>
              
              
             
              
                 

            </div>


          </form>
        </div>
      </div>
    );
  }
}
export default Jeopardy;