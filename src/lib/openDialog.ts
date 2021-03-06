
import Dialog from './Dialog.vue';
import { createApp, h } from 'vue';

export const openDialog = (options) => {
  const {title, content, confirm1, cancel1} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    // @ts-ignore
    app.unmount()
    div.remove()
  }
  // render和h函数动态挂载组件
  const app = createApp({
    render(){
      return h(
        Dialog, 
        // 第一个对象传Dialog本身的属性，第二个对象传Dialog的插槽属性
        {
          visible: true, 
          'onUpdate:visible': (newVisible) => {
            if(!newVisible){
              close()
            }
          },
          confirm: confirm1,
          cancel: cancel1
        }, 
        {
          title, content
        }
      )
    }
  })
  app.mount(div)
}