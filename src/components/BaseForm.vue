<template>
    <div>
        <h4 class="section__title">{{title}}</h4>
        <form>
            <div class="form-group">
                <label for="username">Ваше имя</label>
                <input type="text"
                       v-model="userName"
                       class="form-control"
                       :class="{'has-error': $v.userName.$error}"
                       id="username"
                       @blur="$v.userName.$touch()"
                       @focus="$v.userName.$reset()"
                       placeholder="Как вас зовут?">

                <div class="error-message" v-if="$v.userName.$error">
                    {{userNameErrorMessage}}
                </div>
            </div>
            <div class="form-group">
                <label for="phone">Ваш телефон</label>
                <masked-input type="tel"
                              name="phone"
                              id="phone"
                              class="form-control"
                              :class="{'has-error' :$v.phoneNumber.$error}"
                              v-model="phoneNumber"
                              :mask="['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]"
                              :guide="true"
                              @blur="$v.phoneNumber.$touch()"
                              @focus="$v.phoneNumber.$reset()"
                              placeholder="Телефон"
                              placeholderChar="_">
                </masked-input>

                <div class="error-message" v-if="$v.phoneNumber.$error">
                    {{phoneNumberErrorMessage}}
                </div>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="agreement">
                <label class="form-check-label" for="exampleCheck1">
                  Согласен на <a href @click.prevent="$emit('show')" class="privacy-policy__link">обработку персональных данных</a>
                </label>

                <div class="error-message">
                    {{agreementErrorMessage}}
                </div>
            </div>
            <button type="submit"
                    class="btn btn-yellow w-100"
                    @click.prevent="submitForm"
                    :disabled="!submitModalBtnAvailable"
            >
                Отправить
            </button>
        </form>
    </div>
</template>

<script>
  import MaskedInput from 'vue-text-mask'
  import { required, minLength } from 'vuelidate/lib/validators'

  export default {
    name: 'BaseForm',
    components: {
      MaskedInput
    },
    props: {
      title: String,
      default: 'Оставить заявку'
    },
    data: () => ({
      phoneNumber: '',
      userName: '',
      agreement: true
    }),
    computed: {
      userNameErrorMessage () {
        if (!this.$v.userName.$error) return ''

        if (!this.$v.userName.required || !this.$v.userName.minLength) {
          return 'Введите ваше имя'
        }
      },

      phoneNumberErrorMessage () {
        if (!this.$v.phoneNumber.$error) return ''

        if (!this.$v.phoneNumber.required) {
          return 'Введите корректный номер телефона'
        }
      },

      agreementErrorMessage () {
        if (!this.agreement) {
          return 'Без согласия отправка заявки невозможна.'
        }
      },

      submitModalBtnAvailable () {
        return !this.$v.phoneNumber.$invalid && !this.$v.userName.$invalid && this.agreement
      }
    },

    methods: {
      submitForm () {
        if (!this.submitModalBtnAvailable) return
          const form = new FormData();
          form.append('name',this.userName);
          form.append('phone',this.phoneNumber);
          fetch('ajax.php',{method:"POST",body:form})
              .then(res=>res=="succes"?this.submitSucces():this.submitError())
              .catch(err=>this.submitError());
      },
      submitSucces(){
        this.userName = '';
        this.phoneNumber = '';
        alert('Спасибо за вашу заявку!')
      },
      submitError(){
        alert('Ошибка отправки, попробуйте еещ раз!')
      }
    },

    validations: {
      'userName': {
        required,
        minLength: minLength(2)
      },
      'phoneNumber': {
        required
      }
    }
  }
</script>

<style scoped>

</style>
