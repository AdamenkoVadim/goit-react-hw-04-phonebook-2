import React from "react";
import css from "components/ContactForm/ContactForm.module.css"

export class ContactForm extends React.Component {
    state = {
        name: "",
        number: "",
    }

    handleChange=(event)=>{
        this.setState({
          [event.currentTarget.name]:event.currentTarget.value
        })
      }
    
      handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
      };
    
      reset = () => {
        this.setState({name:'',number:''});
      };

render() {
    return(
        <form className={css.contactForm} onSubmit={this.handleSubmit}>
          <label>
            Name <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
          </label>
          <label>
            Number <input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  value={this.state.number}
                  onChange={this.handleChange}
                />
          </label>
          <button type="submit">add</button>
        </form>
    )
}
}