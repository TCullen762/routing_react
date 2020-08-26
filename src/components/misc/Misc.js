/*return (

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
}*/