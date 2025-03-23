/**
 * @description This js load in the friends list, chat, and other related areas. 
 * 
 * @note only functions if the user has javascript enabled. 
 */

    // class CClassDeminifier {
    //     constructor() {
    //         this.m_bInClient = !!window.SteamClient?.User;
    //         this.m_strWebpackGlobal = Object.keys(window).find(
    //             (e) => e.startsWith("webpackChunk") && e !== "webpackChunklegacy_web",
    //         );
    //         this.m_vecModules = [];
    
    //         this.k_unDelay = 1.5;
    //         this.k_vecWebSelectors = [
    //             ".game_description_column > [data-featuretarget]",
    //             "#steam_charts_root_content",
    //             "[data-featuretarget] > div",
    //             "#react_root",
    //         ];
    
    //         this.Log("Webpack global: %o", this.m_strWebpackGlobal);
    //     }
    
    //     Log(strFormat, ...args) {
    //         console.log(
    //             `%cCClassDeminifier%c ${strFormat}`,
    //             "background-color: black; color: white; padding: 0 1ch;",
    //             "",
    //             ...args,
    //         );
    //     }
    
    //     Init() {
    //         const webpackCache = {};
    //         let initReq;
    //         window[this.m_strWebpackGlobal].push([
    //             [Math.random()],
    //             {},
    //             (r) => {
    //                 initReq = r;
    //             },
    //         ]);
    //         for (const i of Object.keys(initReq.m)) {
    //             webpackCache[i] = initReq(i);
    //         }
    
    //         this.m_vecModules = Object.values(webpackCache).filter(
    //             (e) => e && typeof e === "object" && !e.__esModule,
    //         );
    //     }
    
    //     WaitForElement(strSelector, elParent = document) {
    //         return new Promise((resolve) => {
    //             const el = elParent.querySelector(strSelector);
    //             if (el) {
    //                 resolve(el);
    //             }
    
    //             const pObserver = new MutationObserver(() => {
    //                 const el = elParent.querySelector(strSelector);
    //                 if (!el) {
    //                     return;
    //                 }
    
    //                 resolve(el);
    //                 pObserver.disconnect();
    //             });
    
    //             pObserver.observe(document.body, {
    //                 subtree: true,
    //                 childList: true,
    //             });
    //         });
    //     }
    
    //     GetNormalClass(strName) {
    //         const pNamespace = this.m_vecModules.find((e) =>
    //             Object.values(e).includes(strName),
    //         );
    
    //         return pNamespace
    //             ? Object.keys(pNamespace).find((e) => pNamespace[e] === strName)
    //             : null;
    //     }
    
    //     NormalizeElement(el) {
    //         // text
    //         if (!el.classList) {
    //             return;
    //         }
    
    //         for (const e of el.classList) {
    //             const strNewClass = this.GetNormalClass(e);
    //             if (!strNewClass) {
    //                 continue;
    //             }
    
    //             el.classList.add(strNewClass);
    //         }
    
    //         for (const e of el.children) {
    //             this.NormalizeElement(e);
    //         }
    //     }
    
    //     DoTheThing() {
    //         if (this.m_bInClient) {
    //             this.DoClient();
    //         } else {
    //             this.DoWeb();
    //         }
    //     }
    
    //     DoWeb() {
    //         // Wait for React parts to load. Sometimes there are 2 of them.
    //         for (const e of this.k_vecWebSelectors) {
    //             this.WaitForElement(e).then((elTarget) => {
    //                 this.Log("Got target %o", e);
    //                 this.NormalizeElement(elTarget);
    //             });
    //         }
    //     }
    
    //     DoClient() {
    //         this.Log("Waiting for focus in %s seconds...", this.k_unDelay);
    //         setTimeout(() => {
    //             const pWindow = [...g_PopupManager.GetPopups()].find((e) =>
    //                 e.m_popup.document.hasFocus(),
    //             );
    
    //             this.Log("Got target %o", pWindow.m_strName);
    //             this.NormalizeElement(pWindow.m_element);
    //         }, this.k_unDelay * 1_000);
    //     }
    // }

function initialize() {
    // const pClassDeminifier = new CClassDeminifier();
    // pClassDeminifier.Init();
}

initialize()