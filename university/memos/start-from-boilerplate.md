---
sidebar_position: 5
---

# Запуск проекта с шаблона

Чтобы запустить проект с [шаблона](/university/4-icerock-basics/mobile-moko-boilerplate) нужно:
пока только такой вариант худо бедно сработал :(

1. скачать зип бойлерплейта себе 
1. скопировать оттуда все файлы 
1. создать новый, пустой репозиторий Вашего проекта
1. склонить себе 
1. скопировать все файлы из бойлерплейта и вставить их в ваш репозиторий 
1. вызвать команду `git rm -rf --cached .`, а потом `git add .` - чтобы заработал git ignore и весь мусор удалился из проекта 
1. в файле `android-app-convention.gradle.kts` изменить блок `signingConfigs` на следующий, нужно это потому что боевой проект необходимо настроить, чем мы сейчас заниматься не будем, поэтому будем всегда использовать debug сборку
    ```kotlin
        signingConfigs {
        create("release") {
    //            keyAlias = System.getenv("RELEASE_KEY_ALIAS")
    //            keyPassword = System.getenv("RELEASE_KEY_PASSWORD")
    //            storeFile = file("signing/release.jks")
    //            storePassword = System.getenv("RELEASE_STORE_PASSWORD")
            keyAlias = "debug"
            keyPassword = "debugicerock"
            storeFile = file("signing/debug.jks")
            storePassword = "debugicerock"
        }
        create("sharedDebug") {
            keyAlias = "debug"
            keyPassword = "debugicerock"
            storeFile = file("signing/debug.jks")
            storePassword = "debugicerock"
        }
    }
    ```
