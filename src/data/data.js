import { del, get, post, put } from './api.js';

export const getAll = async () =>
  get();

export const getById = async (id) => get();

export const deleteById = async (id) => del();

export const create = async (data) => {
  const result = await post();
  return result;
};

export const editById = async (id, data) => {
  const result = await put();
  return result;
};
