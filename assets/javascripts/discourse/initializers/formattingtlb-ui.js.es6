import { withPluginApi } from 'discourse/lib/plugin-api';
import { onToolbarCreate } from 'discourse/components/d-editor';

function priorToApi(container)
{
  const siteSettings = container.lookup('site-settings:main');

  if (siteSettings.formattingtlb_ui_enabled) {
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "souligner_ui_button",
          group: "fontStyles",
          icon: "fa-strikethrough",
          perform: e => e.applySurround('[s]', '[/s]', 'souligner_ui_default_text')
        });
      });
    
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "couleur_ui_button",
          group: "fontStyles",
          icon: "paint-brush",
          perform: e => e.applySurround('[color=#ff0000]', '[/color]', 'couleur_ui_default_text')
        });
      });
    
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "addimg_ui_button",
          group: "extras",
          icon: "picture-o",
          perform: e => e.applySurround('[img]', '[/img]', 'addimg_ui_default_text')
        });
      });
      
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "floatl_ui_button",
          group: "extras",
          icon: "indent",
          perform: e => e.applySurround('[floatl]', '[/floatl]', 'floatl_ui_default_text')
        });
      });
      
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "center_ui_button",
          group: "extras",
          icon: "align-center",
          perform: e => e.applySurround('[center]', '[/center]', 'center_ui_default_text')
        });
      });
      
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "right_ui_button",
          group: "extras",
          icon: "align-right",
          perform: e => e.applySurround('[right]', '[/right]', 'right_ui_default_text')
        });
      });
      
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "justify_ui_button",
          group: "extras",
          icon: "align-justify",
          perform: e => e.applySurround('[justify]', '[/justify]', 'justify_ui_default_text')
        });
      });
  }
}

function initializePlugin(api)
{
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.formattingtlb_ui_enabled) {
    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "souligner_ui_button",
          group: "fontStyles",
          icon: "fa-strikethrough",
          perform: e => e.applySurround('[s]', '[/s]', 'souligner_ui_default_text')
        });
      });
    
    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "couleur_ui_button",
          group: "fontStyles",
          icon: "paint-brush",
          perform: e => e.applySurround('[color=#ff0000]', '[/color]', 'couleur_ui_default_text')
        });
      });
    
    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "addimg_ui_button",
          group: "extras",
          icon: "picture-o",
          perform: e => e.applySurround('[img]', '[/img]', 'addimg_ui_default_text')
        });
      });
      
    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "floatl_ui_button",
          group: "extras",
          icon: "indent",
          perform: e => e.applySurround('[floatl]', '[/floatl]', 'floatl_ui_default_text')
        });
      });
      
    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "center_ui_button",
          group: "extras",
          icon: "align-center",
          perform: e => e.applySurround('[center]', '[/center]', 'center_ui_default_text')
        });
      });
      
    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "right_ui_button",
          group: "extras",
          icon: "align-right",
          perform: e => e.applySurround('[right]', '[/right]', 'right_ui_default_text')
        });
      });
      
    api.onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "justify_ui_button",
          group: "extras",
          icon: "align-justify",
          perform: e => e.applySurround('[justify]', '[/justify]', 'justify_ui_default_text')
        });
      });
  }
}

export default
{
  name: 'formattingtlb-ui',
  initialize(container)
  {
    withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi(container) });
  }
};
