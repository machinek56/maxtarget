<template>
    <div>
        <h4 class="section__title" v-if="!hideTitle">{{title}}</h4>
        <form>
            <div class="form-group">
                <label class="form-lable" for="username">Ваше имя</label>
                <input type="text"
                       v-model="userName"
                       class="form-control"
                       id="username"
                       placeholder="Как вас зовут?"
                       :class="{'has-error': $v.userName.$error}"
                       @blur="$v.userName.$touch()"
                       @focus="$v.userName.$reset()">

                <div class="error-message" v-if="$v.userName.$error">
                    {{userNameErrorMessage}}
                </div>
            </div>
            <div class="form-group">
                <label class="form-lable" for="phone">Ваш телефон</label>
                <masked-input type="tel"
                              name="phone"
                              id="phone"
                              class="form-control"
                              v-model="phoneNumber"
                              :class="{'has-error': $v.phoneNumber.$error}"
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

            <div class="form-group">
              <label class="form-lable" for="account">Имя аккаунта или ссылка на сайт</label>
              <input type="text"
                     v-model="account"
                     class="form-control"
                     id="account"
                     placeholder="@имя_аккаунта или сайт"
                     :class="{'has-error': $v.account.$error}"
                     @blur="$v.account.$touch()"
                     @focus="$v.account.$reset()">

              <!--<div class="error-message" v-if="$v.account.$error">-->
                <!--{{userNameErrorMessage}}-->
              <!--</div>-->
            </div>

            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="agreement">
                <label class="form-check-label" for="exampleCheck1">
                  Согласен на <span @click.prevent="$emit('show', 'privacyPolicy')" class="privacy-policy__link">обработку персональных данных</span>
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
      title: {
        type: String,
        default: 'Оставить заявку'
      },
      hideTitle: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      phoneNumber: '',
      userName: '',
      agreement: true,
      account: ''
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

        if (!this.$v.phoneNumber.required || !this.phoneNumber.validPhone) {
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

        const form = new FormData()
        form.append('name', this.userName)
        form.append('phone', this.phoneNumber)
        form.append('account', this.account)

        fetch('ajax.php', { method: 'POST', body: form })
          .then(res => {
            return res.text()
          })
          .then(res => {
            console.log(res)
            res === 'success' ? this.submitSuccess() : this.submitError()
          })
          .catch(err => {
            console.error(err)
            this.submitError()
          });
      },

      submitSuccess(){
        this.userName = '';
        this.phoneNumber = '';
        this.account = '';
        this.$toast.success('Спасибо за вашу заявку!', 'OK');
        this.$emit('hide')
      },

      submitError(){
        this.$toast.error('Ошибка отправки, попробуйте еще раз!', 'Ошибка');
      }
    },

    validations: {
      'userName': {
        required,
        minLength: minLength(2)
      },
      'phoneNumber': {
        required,
        validPhone (value) {
          const unMaskedValue = value.replace(/[-()_\s]/g, '')
          return value ? unMaskedValue.length === 11 : false
        }
      },
      'account': {
        minLength: minLength(3)
      }
    }
  }
</script>

<style scoped>

</style>
