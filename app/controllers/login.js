import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { buildValidations } from 'ember-cp-validations';
import emailFieldValidation from 'rarwe/validations/email-field';
import passwordFieldValidation from 'rarwe/validations/password-field';
const Validations = buildValidations({
  email: emailFieldValidation,
  password: passwordFieldValidation
})

export default Controller.extend(Validations, {
    router: service(),
    session: service(),
    signIn: action(async function(event){
        event.preventDefault();
        let { email, password } = this;
        await this.session.authenticate('authenticator:credentials', email, password);
        await this.router.transitionTo('bands');
    }),
    init() {
        this._super(...arguments);
        this.set('showErrors', { email: false, password: false });
      },
    
    setShowErrors: action(function(property) {
        let showErrors = {...this.showErrors};
        showErrors[property] = true;
        this.set('showErrors', showErrors);
    })
});
