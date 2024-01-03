module github.com/hbstack/theme-start/exampleSite

go 1.19

replace (
	github.com/hbstack/theme-start => ../
	github.com/hbstack/theme-start/engines/baidu => ../engines/baidu
	github.com/hbstack/theme-start/engines/bing => ../engines/bing
	github.com/hbstack/theme-start/engines/duckduckgo => ../engines/duckduckgo
	github.com/hbstack/theme-start/engines/google => ../engines/google
	github.com/hbstack/theme-start/engines/sogou => ../engines/sogou
	github.com/hbstack/theme-start/engines/wikipedia => ../engines/wikipedia
	github.com/hbstack/theme-start/engines/yahoo => ../engines/yahoo
	github.com/hbstack/theme-start/engines/yandex => ../engines/yandex
)

require (
	github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2 v2.21100.20000 // indirect
	github.com/hbstack/background-image v0.2.0 // indirect
	github.com/hbstack/base v0.4.1 // indirect
	github.com/hbstack/footer v0.2.7 // indirect
	github.com/hbstack/hb v0.8.0 // indirect
	github.com/hbstack/header v0.12.4 // indirect
	github.com/hbstack/header/modules/language-picker v0.1.23 // indirect
	github.com/hbstack/header/modules/socials v0.1.28 // indirect
	github.com/hbstack/header/modules/theme-toggle v0.4.3 // indirect
	github.com/hbstack/theme-start v0.0.0-20230915145637-74af94a738a8 // indirect
	github.com/hbstack/theme-start/engines/baidu v0.0.0-00010101000000-000000000000 // indirect
	github.com/hbstack/theme-start/engines/bing v0.0.0-00010101000000-000000000000 // indirect
	github.com/hbstack/theme-start/engines/duckduckgo v0.0.0-00010101000000-000000000000 // indirect
	github.com/hbstack/theme-start/engines/google v0.0.0-00010101000000-000000000000 // indirect
	github.com/hbstack/theme-start/engines/sogou v0.0.0-00010101000000-000000000000 // indirect
	github.com/hbstack/theme-start/engines/wikipedia v0.0.0-00010101000000-000000000000 // indirect
	github.com/hbstack/theme-start/engines/yahoo v0.0.0-00010101000000-000000000000 // indirect
	github.com/hbstack/theme-start/engines/yandex v0.0.0-00010101000000-000000000000 // indirect
	github.com/hugomods/icons/vendors/bootstrap v0.5.2 // indirect
	github.com/hugomods/icons/vendors/font-awesome v0.6.1 // indirect
	github.com/hugomods/icons/vendors/simple-icons v1.0.26 // indirect
	github.com/hugomods/seo/modules/favicons v0.2.1 // indirect
)
