
declare module '@treenewbie/react-native-wechat' {
    import { EmitterSubscription } from 'react-native'
    /**
     * `addListener` inherits from `events` module
     * @method addListener
     * @param {String} eventName - the event name
     * @param {Function} trigger - the function when event is fired
     */
    export function addListener (eventType: string, listener: (...args: any[]) => any, context?: any): EmitterSubscription
  
    /**
     * `once` inherits from `events` module
     * @method once
     * @param {String} eventName - the event name
     * @param {Function} trigger - the function when event is fired
     */
    export function once (eventType: string, listener: (...args: any[]) => any, context: any): EmitterSubscription;
  
    /**
     * `removeAllListeners` inherits from `events` module
     * @method removeAllListeners
     * @param {String} eventName - the event name
     */
    export function removeAllListeners (eventType?: string): void;
  
    /**
     * @method registerApp
     * @param {String} appid - the app id
     * @return {Promise}
     */
    // export function registerApp (appid: string): Promise<any>
  
    /**
     * @method registerAppWithDescription
     * @param {String} appid - the app id
     * @param {String} appdesc - the app description
     * @return {Promise}
     */
    // export function registerAppWithDescription (appid: string, appdesc: string): Promise<any>
  
    /**
     * Return if the wechat app is installed in the device.
     * @method isWXAppInstalled
     * @return {Promise}
     */
    export function isWXAppInstalled (): Promise<any>
  
    /**
     * Return if the wechat application supports the api
     * @method isWXAppSupportApi
     * @return {Promise}
     */
    export function isWXAppSupportApi (): Promise<any>
  
    /**
     * Get the wechat app installed url
     * @method getWXAppInstallUrl
     * @return {String} the wechat app installed url
     */
    export function getWXAppInstallUrl (): Promise<string>
  
    /**
     * Get the wechat api version
     * @method getApiVersion
     * @return {String} the api version string
     */
    export function getApiVersion (): Promise<string>
  
    /**
     * Open wechat app
     * @method openWXApp
     * @return {Promise}
     */
    export function openWXApp (): Promise<any>
  
    /**
     * @method sendAuthRequest
     * @param {string} scopes - the scopes for authentication.
     * @param {string} state
     * @link https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317851&token=&lang=zh_CN
     * @return {Promise}
     */
    export function sendAuthRequest (scopes: string, state: string): Promise<any>
  
    /**
     * Share something to timeline/moments/朋友圈
     * @method shareToTimeline
     * @param {Object} data
     * @param {String} data.thumbImage - Thumb image of the message, which can be a uri or a resource id.
     * @param {String} data.type - Type of this message. Could be {news|text|imageUrl|imageFile|imageResource|video|audio|file}
     * @param {String} data.webpageUrl - Required if type equals news. The webpage link to share.
     * @param {String} data.imageUrl - Provide a remote image if type equals image.
     * @param {String} data.videoUrl - Provide a remote video if type equals video.
     * @param {String} data.musicUrl - Provide a remote music if type equals audio.
     * @param {String} data.filePath - Provide a local file if type equals file.
     * @param {String} data.fileExtension - Provide the file type if type equals file.
     */
    type ShareData = {
      thumbImage?: string,
      type?: string,
      webpageUrl?: string,
      imageUrl?: string,
      videoUrl?: string,
      musicUrl?: string,
      filePath?: string,
      fileExtension?: string
    }
  
    export function shareToTimeline (data: ShareData): Promise<any>
  
    /**
     * Share something to a friend or group
     * @method shareToSession
     * @param {Object} data
     * @param {String} data.thumbImage - Thumb image of the message, which can be a uri or a resource id.
     * @param {String} data.type - Type of this message. Could be {news|text|imageUrl|imageFile|imageResource|video|audio|file}
     * @param {String} data.webpageUrl - Required if type equals news. The webpage link to share.
     * @param {String} data.imageUrl - Provide a remote image if type equals image.
     * @param {String} data.videoUrl - Provide a remote video if type equals video.
     * @param {String} data.musicUrl - Provide a remote music if type equals audio.
     * @param {String} data.filePath - Provide a local file if type equals file.
     * @param {String} data.fileExtension - Provide the file type if type equals file.
     */
    export function shareToSession (data: ShareData): Promise<any>
  
    /**
     * wechat pay
     * @param {Object} data
     * @param {String} data.partnerId
     * @param {String} data.prepayId
     * @param {String} data.nonceStr
     * @param {String} data.timeStamp
     * @param {String} data.package
     * @param {String} data.sign
     * @returns {Promise}
     */
    type PayData = {
      partnerId?: string,
      prepayId?: string,
      nonceStr?: string,
      timeStamp?: string,
      package?: string,
      sign?: string
    }
  
    export function pay (data: PayData): Promise<any>
  
    /**
     * promises will reject with this error when API call finish with an errCode other than zero.
     */
    export class WechatError extends Error {
      name: string
      code: string
    }
  }
  