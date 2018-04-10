import { IAction, TelegramActions } from '@telegram-actions/core';
import { transmissionActions } from '@telegram-actions/transmission';
import { systemActions } from '@telegram-actions/system';

const token = process.env.TOKEN || '';

const telegramActions = new TelegramActions(token, true);

telegramActions.addActions(transmissionActions);
telegramActions.addActions(systemActions);
telegramActions.start();
