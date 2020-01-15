declare namespace ReactViewPager {
  export interface ViewPager {
    tag: string;
  }
  export interface Frame {
    tag: string;
    autoSize: true | false | 'width' | 'height';
    accessbility: boolean;
    springConfig: any;
  }
  export interface Track {
    tag: string;
    currentView: any;
    viewsToShow: number | 'auto';
    viewToMove: number;
    align: number;
    contain: boolean;
    infinite: boolean;
    instant: boolean;
    axis: 'x' | 'y';
    animations: Array<Object>;
    swipe: any;
    swipeThresold: number;
    flickTimeout: number;
    springConfig: any;
    onSwipeStart(): Function;
    onSwipeEnd(): Function;
    onScroll(): Function;
    onViewChange(): Function;
    onRest(): Function;
  }

  export interface View {
    tag: string;
  }
}


declare module "react-view-pager" {
  export = ReactViewPager;
}
