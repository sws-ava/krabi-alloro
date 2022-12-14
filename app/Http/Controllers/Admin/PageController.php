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
        
        $address = '<b>г. Одесса, Греческая площадь / Дерибасовская</b>';

        return response()->json(
            collect([
                'main' => $main,
                'address' => $address,
            ])
        );
    }

    public function getTranslateUa(){
        $main = Page::where('id', 1)->first();

        $main->title = $main->title_ua;
        $main->content = $main->content_ua;
        $main->description = $main->description_ua;
        
        $address = 'г. Одеса, Грецька площа / Дерибасівська';

        return response()->json(
            collect([
                'main' => $main,
                'address' => $address,
            ])
        );
    }

    
}
