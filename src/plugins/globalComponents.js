import BaseAlert from "../Common/BaseAlert";
import BaseButton from "../Common/BaseButton"
import BaseInput from "../Common/BaseInput"
import BasePagination from "../Common/BasePagination"
import BaseProgress from "../Common/BaseProgress"
import BaseCheckbox from "../Common/BaseCheckbox"
import Card from "../Common/Card"
import Badge from "../Common/Badge"
import BaseRadio from "../Common/BaseRadio"
import BaseSwitch from "../Common/BaseSwitch"
import BaseSlider from "../Common/BaseSlider"
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";

locale.use(lang);

export default {
  install(Vue) {
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name,BaseButton);
    Vue.component(BaseInput.name,BaseInput)
    Vue.component(BasePagination.name,BasePagination)
    Vue.component(BaseProgress.name,BaseProgress)
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    // 
    Vue.component(Badge.name, Badge);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(Card.name,Card)

  },
};
