<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\Page;

class PageController extends Controller
{
    public function getPages(){
        $pages = Page::get();
        return $pages;
    }
    public function getPage(Request $request){
        $page = Page::find($request->pageId);
        return $page;
    }
    public function savePage(Request $request){
        $page = Page::find($request->page['id']);
        $page->title_ru = $request->page['title_ru'];
        $page->title_ua = $request->page['title_ua'];
        $page->description_ru = $request->page['description_ru'];
        $page->description_ua = $request->page['description_ua'];
        $page->content_ru = $request->page['content_ru'];
        $page->content_ua = $request->page['content_ua'];
        $page->save();
    }


    // client
    
    public function getMainPage(Request $request){
        // return 123;
        $page = Page::where('id', 1)->first();
        if($request->locale == 'ua'){
            $page->title = $page->title_ua;
            $page->description = $page->description_ua;
            $page->content = $page->content_ua;
        }else{
            $page->title = $page->title_ru;
            $page->description = $page->description_ru;
            $page->content = $page->content_ru;
        }
        return $page;
    }
    public function getConcept(Request $request){
        $page = Page::where('id', 2)->first();
        return $page;
    }
    public function getContacts(){
        $page = Page::where('id', 3)->first();
        return $page;
    }
    public function getDelivery(){
        $page = Page::where('id', 4)->first();
        return $page;
    }

    
    public function getTranslateRu(){
        $main = Page::where('id', 1)->first();
        $main->title = $main->title_ru;
        $main->content = $main->content_ru;
        $main->description = $main->description_ru;
        $main->ourMenu = 'Наше меню';
        $main->interior = 'Интерьер';
        $main->lookAll = 'Посмотреть все';
        
        $main->address = '';
        $main->phone1 = '(068) 168 96 95';
        $main->phone1full = '+380681689695';
        $main->phone2 = '(063) 877 78 51';
        $main->phone2full = '+380638777851';
        $main->workHours = '10:00 - 23:30';

        $static = [
            'address' => 'г. Одесса, Греческая площадь / Дерибасовская',
            'phone1' => '(068) 168 96 95',
            'phone1full' => '+380681689695',
            'phone2' => '(063) 877 78 51',
            'phone2full' => '+380638777851',
            'workHours' => '10:00 - 23:30',
            'email' => 'sushi.thai.krabi@gmail.com',
            'siteName' => 'Krabi - Thai & Japanese | Кафе Краби - тайская и японская кухня в Одессе. Доставка суши, WOK'
        ];
        
        $concept = Page::where('id', 2)->first();
        $concept->title = $concept->title_ru;
        $concept->content = $concept->content_ru;
        $concept->description = $concept->description_ru;
        
        $contacts = Page::where('id', 3)->first();
        $contacts->title = $contacts->title_ru;
        $contacts->content = $contacts->content_ru;
        $contacts->description = $contacts->description_ru;
        
        $delivery = Page::where('id', 4)->first();
        $delivery->title = $delivery->title_ru;
        $delivery->content = $delivery->content_ru;
        $delivery->description = $delivery->description_ru;
        

        // Menu items
        $navigation = [
            'menu' => 'Меню',
            'concept' => 'Концепция',
            'interior' => 'Интерьер',
            'delivery' => 'Доставка',
            'news' => 'Новости',
            'sale' => 'Акции',
            'gallery' => 'Галерея',
            'contacts' => 'Контакты',
        ];


        return response()->json(
            collect([
                'main' => $main,
                'concept' => $concept,
                'contacts' => $contacts,
                'delivery' => $delivery,
                'navigation' => $navigation,
                'static' => $static,
            ])
        );
    }

    public function getTranslateUa(){
        $main = Page::where('id', 1)->first();
        $main->title = $main->title_ua;
        $main->content = $main->content_ua;
        $main->description = $main->description_ua;
        $main->ourMenu = 'Наше меню';
        $main->interior = 'Інтер\'єр';
        $main->lookAll = 'ПОДИВИТИСЬ ВСЕ';

        $static = [
            'address' => 'г. Одеса, Грецька площа / Дерибасівська',
            'phone1' => '(068) 168 96 95',
            'phone1full' => '+380681689695',
            'phone2' => '(063) 877 78 51',
            'phone2full' => '+380638777851',
            'workHours' => '10:00 - 23:30',
            'email' => 'sushi.thai.krabi@gmail.com',
            'siteName' => 'Krabi - Thai & Japanese | Кафе Крабі - тайська та японська кухня в Одесі. Доставка суші, WOK'
        ];

        $concept = Page::where('id', 2)->first();
        $concept->title = $concept->title_ua;
        $concept->content = $concept->content_ua;
        $concept->description = $concept->description_ua;
        
        $contacts = Page::where('id', 3)->first();
        $contacts->title = $contacts->title_ua;
        $contacts->content = $contacts->content_ua;
        $contacts->description = $contacts->description_ua;
        
        $delivery = Page::where('id', 4)->first();
        $delivery->title = $delivery->title_ua;
        $delivery->content = $delivery->content_ua;
        $delivery->description = $delivery->description_ua;
        

        // Menu items
        $navigation = [
            'menu' => 'Меню',
            'concept' => 'Концепція',
            'interior' => 'Інтер\'єр',
            'delivery' => 'Доставка',
            'news' => 'Новини',
            'sale' => 'Акції',
            'gallery' => 'Галерея',
            'contacts' => 'Контакти',
        ];

        return response()->json(
            collect([
                'main' => $main,
                'concept' => $concept,
                'contacts' => $contacts,
                'delivery' => $delivery,
                'navigation' => $navigation,
                'static' => $static,
            ])
        );
    }

    
}
