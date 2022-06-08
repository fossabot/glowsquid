// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en-gb'

export type Locales =
	| 'en'
	| 'en-gb'
	| 'en-us'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	app: {
		header: {
			/**
			 * Glowsquid
			 */
			title: string
			tabs: {
				/**
				 * Home
				 */
				home: string
				/**
				 * Browse
				 */
				browse: string
				/**
				 * Instances
				 */
				instances: string
			}
			accounts: {
				/**
				 * Select an account
				 */
				placeholderText: string
				/**
				 * Add new account
				 */
				addAccount: string
			}
		}
	}
}

export type TranslationFunctions = {
	app: {
		header: {
			/**
			 * Glowsquid
			 */
			title: () => LocalizedString
			tabs: {
				/**
				 * Home
				 */
				home: () => LocalizedString
				/**
				 * Browse
				 */
				browse: () => LocalizedString
				/**
				 * Instances
				 */
				instances: () => LocalizedString
			}
			accounts: {
				/**
				 * Select an account
				 */
				placeholderText: () => LocalizedString
				/**
				 * Add new account
				 */
				addAccount: () => LocalizedString
			}
		}
	}
}

export type Formatters = {}
