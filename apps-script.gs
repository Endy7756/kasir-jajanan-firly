function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Jajanan Firly Apps Script is running.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const request = JSON.parse(e.postData.contents || '{}');
    const action = request.action || 'ping';
    const payload = request.payload || {};

    if (action === 'saveState') {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const sheets = {
        users: getOrCreateSheet(ss, 'users'),
        products: getOrCreateSheet(ss, 'products'),
        transactions: getOrCreateSheet(ss, 'transactions'),
        stockLogs: getOrCreateSheet(ss, 'stockLogs'),
        settings: getOrCreateSheet(ss, 'settings')
      };

      writeRows(sheets.users, [
        ['id', 'name', 'email', 'username', 'password', 'role', 'cabang', 'status', 'createdAt'],
        ...((payload.users || []).map(u => [u.id, u.name, u.email, u.username, u.password, u.role, u.cabang, u.status, u.createdAt]))
      ]);

      writeRows(sheets.products, [
        ['id', 'code', 'barcode', 'name', 'category', 'satuan', 'modal', 'harga', 'stok', 'cabang', 'updatedAt'],
        ...((payload.products || []).map(p => [p.id, p.code, p.barcode, p.name, p.category, p.satuan, p.modal, p.harga, p.stok, p.cabang, p.updatedAt]))
      ]);

      writeRows(sheets.transactions, [
        ['id', 'cabang', 'kasir', 'metode', 'noRef', 'items', 'total', 'discount', 'createdAt'],
        ...((payload.transactions || []).map(t => [t.id, t.cabang, t.kasir, t.metode, t.noRef || '', JSON.stringify(t.items), t.total, t.discount || 0, t.createdAt]))
      ]);

      writeRows(sheets.stockLogs, [
        ['id', 'productId', 'productName', 'change', 'note', 'updatedAt'],
        ...((payload.stockLogs || []).map(s => [s.id, s.productId, s.productName, s.change, s.note, s.updatedAt]))
      ]);

      return jsonOutput({ status: 'ok', message: 'Data berhasil disimpan ke Google Sheets.' });
    }

    if (action === 'loadState') {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const users = readSheet(ss.getSheetByName('users'));
      const products = readSheet(ss.getSheetByName('products'));
      const transactions = readSheet(ss.getSheetByName('transactions'));
      const stockLogs = readSheet(ss.getSheetByName('stockLogs'));

      return jsonOutput({
        status: 'ok',
        payload: {
          users: toObjects(users, ['id', 'name', 'email', 'username', 'password', 'role', 'cabang', 'status', 'createdAt']),
          products: toObjects(products, ['id', 'code', 'barcode', 'name', 'category', 'satuan', 'modal', 'harga', 'stok', 'cabang', 'updatedAt']),
          transactions: toObjects(transactions, ['id', 'cabang', 'kasir', 'metode', 'noRef', 'items', 'total', 'discount', 'createdAt']).map(t => ({ ...t, items: safeJsonParse(t.items, []) })),
          stockLogs: toObjects(stockLogs, ['id', 'productId', 'productName', 'change', 'note', 'updatedAt'])
        }
      });
    }

    return jsonOutput({ status: 'ok', action, payload });
  } catch (err) {
    return jsonOutput({ status: 'error', message: err.toString() }, 500);
  }
}

function initializeSpreadsheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ['users', 'products', 'transactions', 'stockLogs', 'settings'];
  sheets.forEach(name => getOrCreateSheet(ss, name));

  const usersSheet = ss.getSheetByName('users');
  if (usersSheet.getLastRow() === 0) {
    writeRows(usersSheet, [[
      'id', 'name', 'email', 'username', 'password', 'role', 'cabang', 'status', 'createdAt'
    ]]);
  }

  const productsSheet = ss.getSheetByName('products');
  if (productsSheet.getLastRow() === 0) {
    writeRows(productsSheet, [[
      'id', 'code', 'barcode', 'name', 'category', 'satuan', 'modal', 'harga', 'stok', 'cabang', 'updatedAt'
    ]]);
  }

  const transSheet = ss.getSheetByName('transactions');
  if (transSheet.getLastRow() === 0) {
    writeRows(transSheet, [[
      'id', 'cabang', 'kasir', 'metode', 'noRef', 'items', 'total', 'discount', 'createdAt'
    ]]);
  }

  const stockSheet = ss.getSheetByName('stockLogs');
  if (stockSheet.getLastRow() === 0) {
    writeRows(stockSheet, [[
      'id', 'productId', 'productName', 'change', 'note', 'updatedAt'
    ]]);
  }

  const settingsSheet = ss.getSheetByName('settings');
  if (settingsSheet.getLastRow() === 0) {
    writeRows(settingsSheet, [[
      'key', 'value'
    ]]);
    writeRows(settingsSheet, [['defaultCabang', 'Jakarta']]);
  }

  return ss;
}

function getOrCreateSheet(ss, name) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}

function writeRows(sheet, rows) {
  if (!rows || rows.length === 0) return;
  const range = sheet.getRange(1, 1, rows.length, rows[0].length);
  range.setValues(rows);
}

function readSheet(sheet) {
  if (!sheet) return [];
  return sheet.getDataRange().getValues();
}

function toObjects(rows, headers) {
  if (!rows || rows.length <= 1) return [];
  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = row[idx] ?? '';
    });
    return obj;
  });
}

function jsonOutput(data, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function safeJsonParse(value, fallback) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return fallback;
  }
}
