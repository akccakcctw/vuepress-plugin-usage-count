import pageComponents from '@internal/page-components';
import UsageCount from './UsageCount.vue';

export default ({ Vue }) => {
	// ref: https://github.com/vuejs/vuepress/issues/1173#issuecomment-470534176
	for(const [name, component] of Object.entries(pageComponents)) {
		Vue.component(name, component);
	}
	Vue.component('UsageCount', UsageCount);
};
